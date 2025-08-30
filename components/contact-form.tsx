'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { Loader2, CheckCircle } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  contactFormSchema,
  type ContactFormData,
  budgetOptions,
  timelineOptions
} from '@/lib/validations'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setShowSuccessDialog(true)
      reset()
    } catch (error) {
      console.error('Form submission error:', error)
      // In a real app, you'd show an error message to the user
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Card className="bg-zinc-900/50 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-2xl text-zinc-100">
            Get started with your automation
          </CardTitle>
          <p className="text-zinc-400">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Honeypot field - hidden from users */}
            <input
              type="text"
              {...register('honeypot')}
              className="absolute -left-9999px"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  {...register('name')}
                  placeholder="Your full name"
                  className="bg-zinc-800/50 border-zinc-700 focus:border-indigo-400"
                />
                {errors.name && (
                  <p className="text-sm text-red-400 mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                  Work Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  {...register('email')}
                  placeholder="you@company.com"
                  className="bg-zinc-800/50 border-zinc-700 focus:border-indigo-400"
                />
                {errors.email && (
                  <p className="text-sm text-red-400 mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-zinc-300 mb-2">
                  Company *
                </label>
                <Input
                  id="company"
                  {...register('company')}
                  placeholder="Your company name"
                  className="bg-zinc-800/50 border-zinc-700 focus:border-indigo-400"
                />
                {errors.company && (
                  <p className="text-sm text-red-400 mt-1">{errors.company.message}</p>
                )}
              </div>

              {/* Website */}
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-zinc-300 mb-2">
                  Website
                </label>
                <Input
                  id="website"
                  {...register('website')}
                  placeholder="https://yourcompany.com"
                  className="bg-zinc-800/50 border-zinc-700 focus:border-indigo-400"
                />
                {errors.website && (
                  <p className="text-sm text-red-400 mt-1">{errors.website.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Budget */}
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-zinc-300 mb-2">
                  Budget Range *
                </label>
                <Select onValueChange={(value) => setValue('budget', value)}>
                  <SelectTrigger className="bg-zinc-800/50 border-zinc-700 focus:border-indigo-400">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.budget && (
                  <p className="text-sm text-red-400 mt-1">{errors.budget.message}</p>
                )}
              </div>

              {/* Timeline */}
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-zinc-300 mb-2">
                  Timeline *
                </label>
                <Select onValueChange={(value) => setValue('timeline', value)}>
                  <SelectTrigger className="bg-zinc-800/50 border-zinc-700 focus:border-indigo-400">
                    <SelectValue placeholder="When do you need this?" />
                  </SelectTrigger>
                  <SelectContent>
                    {timelineOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.timeline && (
                  <p className="text-sm text-red-400 mt-1">{errors.timeline.message}</p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                Project Details *
              </label>
              <Textarea
                id="message"
                {...register('message')}
                placeholder="Tell us about your current workflows, pain points, and what you'd like to automate..."
                rows={5}
                className="bg-zinc-800/50 border-zinc-700 focus:border-indigo-400"
              />
              {errors.message && (
                <p className="text-sm text-red-400 mt-1">{errors.message.message}</p>
              )}
            </div>

            {/* Submit button */}
            <Button
              type="submit"
              variant="gradient"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </Button>

            <p className="text-xs text-zinc-500 text-center">
              We'll get back to you within 24 hours. Usually much faster.
            </p>
          </form>
        </CardContent>
      </Card>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="bg-zinc-900 border-zinc-800">
          <DialogHeader>
            <div className="mx-auto mb-4">
              <CheckCircle className="h-12 w-12 text-green-400" />
            </div>
            <DialogTitle className="text-center text-zinc-100">
              Message sent successfully!
            </DialogTitle>
            <DialogDescription className="text-center text-zinc-400">
              Thanks for reaching out. We'll review your project details and get back
              to you within 24 hours with next steps.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}
