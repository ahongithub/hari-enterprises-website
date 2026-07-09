import type { EnquiryInput } from './validation';
import { company } from '@/data/company';

/**
 * Email delivery via Resend (https://resend.com).
 * Set RESEND_API_KEY, ENQUIRY_TO (defaults to jharidwari@gmail.com) and
 * ENQUIRY_FROM (a verified sender/domain) in the environment. If no API key is
 * configured, sending is skipped gracefully and the API route falls back to a
 * mailto link on the client. Credentials are never exposed to the browser.
 */

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO = process.env.ENQUIRY_TO ?? company.email;
const FROM = process.env.ENQUIRY_FROM ?? 'Hari Enterprises <onboarding@resend.dev>';

export const emailConfigured = Boolean(RESEND_API_KEY);

function esc(v: string): string {
  return v.replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' })[c] as string);
}

function row(label: string, value?: string): string {
  if (!value) return '';
  return `<tr><td style="padding:6px 12px;color:#4d5768;font-size:13px;white-space:nowrap;vertical-align:top">${esc(
    label,
  )}</td><td style="padding:6px 12px;color:#12233d;font-size:14px">${esc(value)}</td></tr>`;
}

export function buildInternalEmail(d: EnquiryInput): { subject: string; html: string; text: string } {
  const subject = `New enquiry, ${d.productCategory}, ${d.companyName}`;
  const html = `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;margin:auto">
    <h2 style="color:#12233d;border-bottom:3px solid #c8322b;padding-bottom:8px">New website enquiry</h2>
    <table style="border-collapse:collapse;width:100%">
      ${row('Name', d.name)}
      ${row('Company', d.companyName)}
      ${row('Designation', d.designation)}
      ${row('Email', d.email)}
      ${row('Phone / WhatsApp', d.phone)}
      ${row('City / State', `${d.city}, ${d.state}`)}
      ${row('Product category', d.productCategory)}
      ${row('Specific product', d.specificProduct)}
      ${row('Quantity', [d.quantity, d.unit].filter(Boolean).join(' '))}
      ${row('Application / Industry', d.application)}
      ${row('Delivery location', d.deliveryLocation)}
      ${row('Delivery timeline', d.deliveryTimeline)}
      ${row('Preferred contact', d.preferredContact)}
      ${row('Heard about us via', d.hearAboutUs)}
    </table>
    <h3 style="color:#12233d;margin-top:20px">Requirement</h3>
    <p style="color:#252c39;font-size:14px;line-height:1.6;white-space:pre-wrap">${esc(d.requirement)}</p>
  </div>`;
  const text = `New website enquiry
Name: ${d.name}
Company: ${d.companyName}
Designation: ${d.designation ?? '-'}
Email: ${d.email}
Phone: ${d.phone}
City/State: ${d.city}, ${d.state}
Product category: ${d.productCategory}
Specific product: ${d.specificProduct ?? '-'}
Quantity: ${[d.quantity, d.unit].filter(Boolean).join(' ') || '-'}
Application: ${d.application ?? '-'}
Delivery location: ${d.deliveryLocation}
Delivery timeline: ${d.deliveryTimeline ?? '-'}
Preferred contact: ${d.preferredContact ?? '-'}
Heard via: ${d.hearAboutUs ?? '-'}

Requirement:
${d.requirement}`;
  return { subject, html, text };
}

export function buildAcknowledgementEmail(d: EnquiryInput): { subject: string; html: string } {
  const subject = `We've received your enquiry, ${company.name}`;
  const html = `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:auto;color:#252c39">
    <h2 style="color:#12233d">Thank you, ${esc(d.name.split(' ')[0] ?? d.name)}</h2>
    <p style="font-size:14px;line-height:1.6">We've received your requirement for
      <strong>${esc(d.productCategory)}</strong> and our team will review it and get back to you.</p>
    <p style="font-size:14px;line-height:1.6">If it's urgent, you can reach us directly:</p>
    <ul style="font-size:14px;line-height:1.8">
      <li>Phone / WhatsApp: ${esc(company.phone.display)}</li>
      <li>Email: ${esc(company.email)}</li>
    </ul>
    <p style="font-size:13px;color:#6b7688;margin-top:24px">${esc(company.name)} · ${esc(
      company.address.office.city,
    )}, ${esc(company.address.office.state)}</p>
  </div>`;
  return { subject, html };
}

interface SendResult {
  internalSent: boolean;
  acknowledgementSent: boolean;
}

export async function sendEnquiryEmails(
  data: EnquiryInput,
  attachment?: { filename: string; content: Buffer },
): Promise<SendResult> {
  if (!RESEND_API_KEY) return { internalSent: false, acknowledgementSent: false };

  // Lazy import so the dependency isn't required when email is unconfigured.
  const { Resend } = await import('resend');
  const resend = new Resend(RESEND_API_KEY);

  const internal = buildInternalEmail(data);
  const ack = buildAcknowledgementEmail(data);

  let internalSent = false;
  let acknowledgementSent = false;

  try {
    await resend.emails.send({
      from: FROM,
      to: TO,
      reply_to: data.email,
      subject: internal.subject,
      html: internal.html,
      text: internal.text,
      attachments: attachment
        ? [{ filename: attachment.filename, content: attachment.content }]
        : undefined,
    });
    internalSent = true;
  } catch (err) {
    console.error('[enquiry] internal email failed:', err);
  }

  try {
    await resend.emails.send({
      from: FROM,
      to: data.email,
      subject: ack.subject,
      html: ack.html,
    });
    acknowledgementSent = true;
  } catch (err) {
    console.error('[enquiry] acknowledgement email failed:', err);
  }

  return { internalSent, acknowledgementSent };
}
