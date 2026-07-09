import { z } from 'zod';
import { categories } from '@/data/products';

const categoryNames = categories.map((c) => c.name) as [string, ...string[]];

/** Shared enquiry schema, used on the client (React Hook-free) and the server. */
export const enquirySchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name.').max(120),
  companyName: z.string().trim().min(2, 'Please enter your company name.').max(160),
  designation: z.string().trim().max(120).optional().or(z.literal('')),
  email: z.string().trim().email('Please enter a valid email address.').max(180),
  phone: z
    .string()
    .trim()
    .min(7, 'Please enter a valid phone number.')
    .max(20)
    .regex(/^[+\d][\d\s-]{6,}$/, 'Please enter a valid phone number.'),
  city: z.string().trim().min(2, 'Please enter your city.').max(80),
  state: z.string().trim().min(2, 'Please enter your state.').max(80),
  productCategory: z.enum(categoryNames, {
    errorMap: () => ({ message: 'Please select a product category.' }),
  }),
  specificProduct: z.string().trim().max(160).optional().or(z.literal('')),
  quantity: z.string().trim().max(60).optional().or(z.literal('')),
  unit: z.string().trim().max(40).optional().or(z.literal('')),
  application: z.string().trim().max(160).optional().or(z.literal('')),
  deliveryLocation: z.string().trim().min(2, 'Please enter the delivery location.').max(160),
  deliveryTimeline: z.string().trim().max(120).optional().or(z.literal('')),
  requirement: z
    .string()
    .trim()
    .min(10, 'Please describe your requirement (at least 10 characters).')
    .max(4000),
  preferredContact: z.enum(['Phone', 'Email', 'WhatsApp']).optional(),
  hearAboutUs: z.string().trim().max(120).optional().or(z.literal('')),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Please accept the privacy terms to continue.' }),
  }),
  // Honeypot, must remain empty. Bots tend to fill every field.
  website: z.string().max(0).optional().or(z.literal('')),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
