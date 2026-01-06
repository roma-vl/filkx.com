import { z } from 'zod'

// Base schema for common fields
const baseSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    source: z.string().optional(),
    honeypot: z.string().max(0, 'Spam detected').optional(),
})

// Schema for General Contact Form
export const contactSchema = baseSchema.extend({
    message: z.string().min(10, 'Message must be at least 10 characters'),
})

// Schema for "Book a Call" Form
export const bookingSchema = baseSchema.extend({
    phone: z.string().regex(/^\+?[0-9\s\-()]{9,}$/, 'Invalid phone number'),
    preferredTime: z.string().optional(),
    description: z.string().min(5, 'Please provide a short description'),
})

export type ContactInput = z.infer<typeof contactSchema>
export type BookingInput = z.infer<typeof bookingSchema>

// Legacy export to avoid breaking everything immediately during migration
export const submissionSchema = contactSchema
export type SubmissionInput = ContactInput
