import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(1, 'Email is required'),
  company: z
    .string()
    .min(2, 'Company name must be at least 2 characters')
    .max(100, 'Company name must be less than 100 characters'),
  website: z
    .string()
    .url('Please enter a valid URL')
    .optional()
    .or(z.literal('')),
  budget: z
    .string()
    .min(1, 'Please select a budget range'),
  timeline: z
    .string()
    .min(1, 'Please select a timeline'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
  // Honeypot field for bot detection
  honeypot: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const budgetOptions = [
  { value: 'under-5k', label: 'Under $5K' },
  { value: '5k-15k', label: '$5K - $15K' },
  { value: '15k-30k', label: '$15K - $30K' },
  { value: 'over-30k', label: 'Over $30K' },
  { value: 'not-sure', label: 'Not sure yet' },
]

export const timelineOptions = [
  { value: 'asap', label: 'ASAP' },
  { value: '1-month', label: 'Within 1 month' },
  { value: '2-3-months', label: '2-3 months' },
  { value: '3-6-months', label: '3-6 months' },
  { value: 'just-exploring', label: 'Just exploring' },
]
