import { NextResponse } from 'next/server';
import { enquirySchema } from '@/lib/validation';
import { rateLimit } from '@/lib/rate-limit';
import { sendEnquiryEmails, emailConfigured } from '@/lib/email';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAX_FILE_BYTES = 8 * 1024 * 1024;
const ACCEPTED_MIME = new Set([
  'application/pdf',
  'image/png',
  'image/jpeg',
  'image/webp',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.ms-excel',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);

function clientIp(req: Request): string {
  const xff = req.headers.get('x-forwarded-for');
  return (xff?.split(',')[0] ?? req.headers.get('x-real-ip') ?? 'unknown').trim();
}

export async function POST(req: Request) {
  // 1. Rate limit per IP (in-memory; swap for Redis/KV at scale — see rate-limit.ts)
  const ip = clientIp(req);
  const rl = rateLimit(`enquiry:${ip}`, 5, 60_000);
  if (!rl.ok) {
    return NextResponse.json(
      { ok: false, message: 'Too many requests. Please try again shortly.' },
      { status: 429, headers: { 'Retry-After': String(rl.retryAfter) } },
    );
  }

  // 2. Parse form data (supports optional file attachment)
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid request.' }, { status: 400 });
  }

  const raw = {
    name: form.get('name'),
    companyName: form.get('companyName'),
    designation: form.get('designation') ?? '',
    email: form.get('email'),
    phone: form.get('phone'),
    city: form.get('city'),
    state: form.get('state'),
    productCategory: form.get('productCategory'),
    specificProduct: form.get('specificProduct') ?? '',
    quantity: form.get('quantity') ?? '',
    unit: form.get('unit') ?? '',
    application: form.get('application') ?? '',
    deliveryLocation: form.get('deliveryLocation'),
    deliveryTimeline: form.get('deliveryTimeline') ?? '',
    requirement: form.get('requirement'),
    preferredContact: form.get('preferredContact') ?? undefined,
    hearAboutUs: form.get('hearAboutUs') ?? '',
    consent: form.get('consent') === 'true',
    website: form.get('website') ?? '', // honeypot
  };

  // 3. Honeypot — silently accept but do nothing, so bots don't learn.
  if (typeof raw.website === 'string' && raw.website.length > 0) {
    return NextResponse.json({ ok: true, delivered: true });
  }

  // 4. Server-side validation with Zod
  const parsed = enquirySchema.safeParse(raw);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === 'string' && !errors[key]) errors[key] = issue.message;
    }
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // 5. Validate optional file
  const file = form.get('file');
  let attachment: { filename: string; content: Buffer } | undefined;
  if (file instanceof File && file.size > 0) {
    if (file.size > MAX_FILE_BYTES) {
      return NextResponse.json({ ok: false, errors: { file: 'File exceeds 8 MB.' } }, { status: 422 });
    }
    if (file.type && !ACCEPTED_MIME.has(file.type)) {
      return NextResponse.json({ ok: false, errors: { file: 'Unsupported file type.' } }, { status: 422 });
    }
    const bytes = Buffer.from(await file.arrayBuffer());
    attachment = { filename: file.name.replace(/[^\w.\- ]/g, '_').slice(0, 120), content: bytes };
  }

  // 6. Deliver. If email isn't configured, we still return success so the client
  //    can show a graceful mailto fallback (delivered:false).
  try {
    if (!emailConfigured) {
      console.info('[enquiry] received (email not configured):', {
        company: parsed.data.companyName,
        category: parsed.data.productCategory,
      });
      return NextResponse.json({ ok: true, delivered: false });
    }
    const result = await sendEnquiryEmails(parsed.data, attachment);
    return NextResponse.json({ ok: true, delivered: result.internalSent });
  } catch (err) {
    console.error('[enquiry] delivery error:', err);
    return NextResponse.json({ ok: true, delivered: false });
  }
}
