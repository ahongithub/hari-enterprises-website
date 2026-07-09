'use client';

import { useRef, useState } from 'react';
import { Loader2, CheckCircle2, AlertCircle, Paperclip, X } from 'lucide-react';
import { categories } from '@/data/products';
import { company, mailHref } from '@/data/company';
import { ButtonEl } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'submitting' | 'success' | 'error' | 'mailto';
type Errors = Record<string, string>;

const MAX_FILE_MB = 8;
const ACCEPTED = ['application/pdf', 'image/png', 'image/jpeg', 'image/webp',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.ms-excel', 'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

function Field({
  label, name, required, error, children, hint,
}: {
  label: string; name: string; required?: boolean; error?: string; hint?: string; children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required && <span className="ml-0.5 text-ember">*</span>}
      </label>
      {children}
      {hint && !error && <p className="mt-1 text-xs text-steel-500">{hint}</p>}
      {error && (
        <p id={`${name}-error`} role="alert" className="mt-1 flex items-center gap-1 text-xs text-ember-600">
          <AlertCircle className="h-3.5 w-3.5" aria-hidden />
          {error}
        </p>
      )}
    </div>
  );
}

const inputCls =
  'w-full rounded border border-steel-300 bg-white px-3 py-2.5 text-[15px] text-ink placeholder:text-steel-400 focus:border-ink focus:outline-none focus:ring-2 focus:ring-ember/20 aria-[invalid=true]:border-ember';

export function EnquiryForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Errors>({});
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string>('');
  const fileRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFileError('');
    const f = e.target.files?.[0];
    if (!f) return setFile(null);
    if (f.size > MAX_FILE_MB * 1024 * 1024) {
      setFileError(`File must be under ${MAX_FILE_MB} MB.`);
      e.target.value = '';
      return;
    }
    if (f.type && !ACCEPTED.includes(f.type)) {
      setFileError('Please upload a PDF, image, Word or Excel document.');
      e.target.value = '';
      return;
    }
    setFile(f);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrors({});
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (file) fd.set('file', file);

    try {
      const res = await fetch('/api/enquiry', { method: 'POST', body: fd });
      const json = (await res.json()) as {
        ok: boolean; errors?: Errors; delivered?: boolean; message?: string;
      };

      if (!res.ok || !json.ok) {
        if (json.errors) {
          setErrors(json.errors);
          setStatus('idle');
          const first = Object.keys(json.errors)[0];
          if (first) document.getElementById(first)?.focus();
          return;
        }
        setStatus('error');
        return;
      }
      // Success. If email isn't configured server-side, we still accept but flag mailto fallback.
      setStatus(json.delivered === false ? 'mailto' : 'success');
      form.reset();
      setFile(null);
      window.scrollTo({ top: formRef.current?.offsetTop ? formRef.current.offsetTop - 120 : 0, behavior: 'smooth' });
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success' || status === 'mailto') {
    return (
      <div className="rounded-lg border border-steel-200 bg-white p-8 text-center shadow-card">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" aria-hidden />
        <h2 className="mt-4 text-xl font-semibold text-ink">Thank you, your requirement has been received</h2>
        <p className="prose-hari mx-auto mt-2 max-w-md">
          Our team will review your enquiry and get back to you. For anything urgent, call or WhatsApp{' '}
          <a href={`tel:+${company.phone.tel}`} className="font-medium text-ember">
            {company.phone.display}
          </a>
          .
        </p>
        {status === 'mailto' && (
          <p className="mx-auto mt-4 max-w-md rounded border border-firebrick/30 bg-firebrick/5 p-3 text-xs text-steel-600">
            Email delivery isn&apos;t configured on this deployment yet. Your details were validated but not emailed.
            You can also send them directly to{' '}
            <a href={mailHref} className="font-medium text-ember">
              {company.email}
            </a>
            .
          </p>
        )}
        <ButtonEl variant="outline" className="mt-6" onClick={() => setStatus('idle')}>
          Submit another enquiry
        </ButtonEl>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="rounded-lg border border-steel-200 bg-white p-6 shadow-card sm:p-8">
      {status === 'error' && (
        <div role="alert" className="mb-6 flex items-start gap-2 rounded border border-ember/30 bg-ember/5 p-3 text-sm text-ember-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          <span>
            Something went wrong sending your enquiry. Please try again, or email us at{' '}
            <a href={mailHref} className="font-medium underline">{company.email}</a>.
          </span>
        </div>
      )}

      {/* Honeypot, hidden from users, visible to bots */}
      <div aria-hidden className="absolute left-[-9999px]" style={{ opacity: 0, height: 0, overflow: 'hidden' }}>
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required error={errors.name}>
          <input id="name" name="name" autoComplete="name" className={inputCls}
            aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />
        </Field>
        <Field label="Company Name" name="companyName" required error={errors.companyName}>
          <input id="companyName" name="companyName" autoComplete="organization" className={inputCls}
            aria-invalid={!!errors.companyName} />
        </Field>
        <Field label="Designation" name="designation" error={errors.designation}>
          <input id="designation" name="designation" autoComplete="organization-title" className={inputCls} />
        </Field>
        <Field label="Email" name="email" required error={errors.email}>
          <input id="email" name="email" type="email" inputMode="email" autoComplete="email" className={inputCls}
            aria-invalid={!!errors.email} />
        </Field>
        <Field label="Phone / WhatsApp" name="phone" required error={errors.phone}>
          <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" className={inputCls}
            placeholder="+91 " aria-invalid={!!errors.phone} />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="City" name="city" required error={errors.city}>
            <input id="city" name="city" autoComplete="address-level2" className={inputCls} aria-invalid={!!errors.city} />
          </Field>
          <Field label="State" name="state" required error={errors.state}>
            <input id="state" name="state" autoComplete="address-level1" className={inputCls} aria-invalid={!!errors.state} />
          </Field>
        </div>
        <Field label="Product Category" name="productCategory" required error={errors.productCategory}>
          <select id="productCategory" name="productCategory" defaultValue="" className={inputCls} aria-invalid={!!errors.productCategory}>
            <option value="" disabled>Select a category…</option>
            {categories.map((c) => (
              <option key={c.id} value={c.name}>{c.name}</option>
            ))}
          </select>
        </Field>
        <Field label="Specific Product" name="specificProduct" error={errors.specificProduct} hint="If known">
          <input id="specificProduct" name="specificProduct" className={inputCls} />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Required Quantity" name="quantity" error={errors.quantity}>
            <input id="quantity" name="quantity" inputMode="numeric" className={inputCls} />
          </Field>
          <Field label="Unit" name="unit" error={errors.unit} hint="kg, bags, pcs…">
            <input id="unit" name="unit" className={inputCls} />
          </Field>
        </div>
        <Field label="Application / Industry" name="application" error={errors.application}>
          <input id="application" name="application" className={inputCls} placeholder="e.g. furnace lining" />
        </Field>
        <Field label="Required Delivery Location" name="deliveryLocation" required error={errors.deliveryLocation}>
          <input id="deliveryLocation" name="deliveryLocation" className={inputCls} aria-invalid={!!errors.deliveryLocation} />
        </Field>
        <Field label="Delivery Timeline" name="deliveryTimeline" error={errors.deliveryTimeline} hint="e.g. within 2 weeks">
          <input id="deliveryTimeline" name="deliveryTimeline" className={inputCls} />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Requirement Description" name="requirement" required error={errors.requirement}>
          <textarea id="requirement" name="requirement" rows={4} className={inputCls}
            placeholder="Describe your requirement, specifications, operating conditions, etc."
            aria-invalid={!!errors.requirement} />
        </Field>
      </div>

      {/* File upload */}
      <div className="mt-5">
        <span className="mb-1.5 block text-sm font-medium text-ink">
          Upload Specification / Drawing / BOQ <span className="font-normal text-steel-500">(optional)</span>
        </span>
        {!file ? (
          <label
            htmlFor="file"
            className="flex cursor-pointer items-center gap-2 rounded border border-dashed border-steel-300 bg-steel-50 px-4 py-3 text-sm text-steel-600 hover:border-ink"
          >
            <Paperclip className="h-4 w-4" aria-hidden />
            Choose a file (PDF, image, Word or Excel · max {MAX_FILE_MB} MB)
            <input ref={fileRef} id="file" name="file" type="file" className="sr-only"
              accept=".pdf.png.jpg.jpeg.webp.xlsx.xls.doc.docx" onChange={onFileChange} />
          </label>
        ) : (
          <div className="flex items-center justify-between gap-3 rounded border border-steel-300 bg-white px-4 py-3 text-sm">
            <span className="flex min-w-0 items-center gap-2 text-ink">
              <Paperclip className="h-4 w-4 shrink-0 text-firebrick" aria-hidden />
              <span className="truncate">{file.name}</span>
              <span className="shrink-0 text-xs text-steel-500">
                ({(file.size / 1024 / 1024).toFixed(1)} MB)
              </span>
            </span>
            <button type="button" onClick={() => { setFile(null); if (fileRef.current) fileRef.current.value = ''; }}
              className="rounded p-1 text-steel-500 hover:text-ember" aria-label="Remove file">
              <X className="h-4 w-4" />
            </button>
          </div>
        )}
        {fileError && <p role="alert" className="mt-1 text-xs text-ember-600">{fileError}</p>}
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <fieldset>
          <legend className="mb-1.5 text-sm font-medium text-ink">Preferred Contact Method</legend>
          <div className="flex gap-4">
            {(['Phone', 'Email', 'WhatsApp'] as const).map((m, i) => (
              <label key={m} className="flex items-center gap-1.5 text-sm text-steel-700">
                <input type="radio" name="preferredContact" value={m} defaultChecked={i === 0}
                  className="text-ember focus:ring-ember" />
                {m}
              </label>
            ))}
          </div>
        </fieldset>
        <Field label="How Did You Hear About Us?" name="hearAboutUs" error={errors.hearAboutUs}>
          <select id="hearAboutUs" name="hearAboutUs" defaultValue="" className={inputCls}>
            <option value="">Select…</option>
            <option>Google / Search</option>
            <option>IndiaMART</option>
            <option>Referral</option>
            <option>Existing customer</option>
            <option>Social media</option>
            <option>Other</option>
          </select>
        </Field>
      </div>

      <div className="mt-6">
        <label className="flex items-start gap-2.5 text-sm text-steel-700">
          <input type="checkbox" name="consent" value="true" className="mt-0.5 h-4 w-4 rounded text-ember focus:ring-ember"
            aria-invalid={!!errors.consent} />
          <span>
            I agree that Hari Enterprises may contact me about my enquiry and I have read the{' '}
            <a href="/privacy-policy" className="font-medium text-ember hover:underline">Privacy Policy</a>.
            <span className="text-ember">*</span>
          </span>
        </label>
        {errors.consent && <p role="alert" className="mt-1 text-xs text-ember-600">{errors.consent}</p>}
      </div>

      <ButtonEl type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={status === 'submitting'}>
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Sending…
          </>
        ) : (
          'Send Requirement'
        )}
      </ButtonEl>
    </form>
  );
}
