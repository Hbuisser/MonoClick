'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Confetti from 'react-confetti'
import { ArrowRight, ArrowLeft, Calculator, TrendingUp, Users, DollarSign, Calendar, ExternalLink, CheckCircle2 } from 'lucide-react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Progress } from '@/components/ui/progress'
import { estimateValuation, formatCurrency, type ValuationParams } from '@/lib/valuation'

// Validation schemas for each step
const step1Schema = z.object({
  businessType: z.string().min(1, 'Business type is required'),
  geography: z.string().min(1, 'Geography is required'),
  arr: z.number().min(1000, 'ARR must be at least €1,000'),
  grossMargin: z.number().min(0).max(100, 'Gross margin must be between 0-100%'),
})

const step2Schema = z.object({
  mrrGrowth: z.union([z.number(), z.nan()]).optional().transform(val => isNaN(val as number) ? undefined : val),
  logoChurn: z.union([z.number(), z.nan()]).optional().transform(val => isNaN(val as number) ? undefined : val),
  nrr: z.union([z.number(), z.nan()]).optional().transform(val => isNaN(val as number) ? undefined : val),
  arpu: z.union([z.number(), z.nan()]).optional().transform(val => isNaN(val as number) ? undefined : val),
  customers: z.union([z.number(), z.nan()]).optional().transform(val => isNaN(val as number) ? undefined : val),
  salesModel: z.string().optional(),
})

const step3Schema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  company: z.string().optional(),
  website: z.string().optional(),
  consent: z.boolean().refine(val => val === true, 'You must agree to be contacted'),
})

type Step1Data = z.infer<typeof step1Schema>
type Step2Data = z.infer<typeof step2Schema>
type Step3Data = z.infer<typeof step3Schema>

interface SaasValuationWidgetProps {
  className?: string
  onComplete?: (data: any) => void
}

export function SaasValuationWidget({ className, onComplete }: SaasValuationWidgetProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [step1Data, setStep1Data] = useState<Step1Data | null>(null)
  const [step2Data, setStep2Data] = useState<Step2Data | null>(null)
  const [step3Data, setStep3Data] = useState<Step3Data | null>(null)
  const [valuation, setValuation] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [animatedValuation, setAnimatedValuation] = useState({
    point: 0,
    low: 0,
    high: 0
  })

  // Handle window resize for confetti
  useEffect(() => {
    function updateSize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  // Animate valuation numbers when results are shown
  useEffect(() => {
    if (!valuation) return

    const duration = 2000 // 2 seconds
    const steps = 60 // 60 FPS
    const stepDuration = duration / steps

    let currentStep = 0
    const interval = setInterval(() => {
      currentStep++
      const progress = Math.min(currentStep / steps, 1)

      // Easing function for smooth animation (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)

      setAnimatedValuation({
        point: Math.floor(valuation.pointEstimate * easeOut),
        low: Math.floor(valuation.lowEstimate * easeOut),
        high: Math.floor(valuation.highEstimate * easeOut)
      })

      if (progress >= 1) {
        clearInterval(interval)
        // Ensure final values are exact
        setAnimatedValuation({
          point: valuation.pointEstimate,
          low: valuation.lowEstimate,
          high: valuation.highEstimate
        })
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [valuation])

  const step1Form = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      businessType: '',
      geography: '',
      arr: 0,
      grossMargin: 75,
    },
  })

  const step2Form = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      mrrGrowth: 5,
      logoChurn: 3,
      nrr: undefined,
      arpu: undefined,
      customers: undefined,
      salesModel: 'Sales-assisted',
    },
  })

  const step3Form = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      company: '',
      website: '',
      consent: false,
    },
  })

  const onStep1Submit = (data: Step1Data) => {
    setStep1Data(data)
    setCurrentStep(2)
  }

  const onStep2Submit = (data: Step2Data) => {
    setStep2Data(data)
    setCurrentStep(3)
  }

  const onStep3Submit = async (data: Step3Data) => {
    if (!step1Data) return

    setStep3Data(data)
    setIsLoading(true)

    try {
      // Calculate valuation
      const params: ValuationParams = {
        ...step1Data,
        ...step2Data,
      }

      const result = estimateValuation(params)
      setValuation(result)

      // Submit lead data (fire and forget)
      const leadData = {
        ...step1Data,
        ...step2Data,
        ...data,
        valuation: result,
        timestamp: new Date().toISOString(),
        utmParams: getUtmParams(),
      }

      // Send to API
      fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData),
      }).catch(console.error)

      onComplete?.(leadData)

      setCurrentStep(4)
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 5000)
    } catch (error) {
      console.error('Error calculating valuation:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const getUtmParams = () => {
    if (typeof window === 'undefined') return {}
    const params = new URLSearchParams(window.location.search)
    return {
      utm_source: params.get('utm_source'),
      utm_medium: params.get('utm_medium'),
      utm_campaign: params.get('utm_campaign'),
      utm_term: params.get('utm_term'),
      utm_content: params.get('utm_content'),
    }
  }

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const progress = (currentStep / 4) * 100

  return (
    <div className={className}>
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.1}
        />
      )}

      <Card className="w-full max-w-2xl mx-auto bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-2xl lg:text-3xl font-heading font-bold text-zinc-100 mb-2">
            <Calculator className="inline-block w-8 h-8 mr-3 text-indigo-400" />
            SaaS Valuation Calculator
          </CardTitle>
          <CardDescription className="text-zinc-400">
            Get an instant estimate of your SaaS company's valuation
          </CardDescription>
          <div className="mt-4">
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-zinc-500 mt-2">Step {currentStep} of 4</p>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-zinc-100 mb-2">Business Basics</h3>
                  <p className="text-zinc-400 text-sm">Tell us about your SaaS business</p>
                </div>

                <form onSubmit={step1Form.handleSubmit(onStep1Submit)} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-200 mb-2">
                      Business Type *
                    </label>
                    <Controller
                      name="businessType"
                      control={step1Form.control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger className="bg-zinc-800 border-zinc-700 text-zinc-100">
                            <SelectValue placeholder="Select business type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="SaaS">SaaS</SelectItem>
                            <SelectItem value="AI SaaS">AI SaaS</SelectItem>
                            <SelectItem value="Developer Tooling">Developer Tooling</SelectItem>
                            <SelectItem value="Marketing/Sales">Marketing/Sales</SelectItem>
                            <SelectItem value="Fintech">Fintech</SelectItem>
                            <SelectItem value="Healthcare">Healthcare</SelectItem>
                            <SelectItem value="Marketplace (SaaS-like)">Marketplace (SaaS-like)</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {step1Form.formState.errors.businessType && (
                      <p className="text-red-400 text-sm mt-1">{step1Form.formState.errors.businessType.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-200 mb-2">
                      Geography *
                    </label>
                    <Controller
                      name="geography"
                      control={step1Form.control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger className="bg-zinc-800 border-zinc-700 text-zinc-100">
                            <SelectValue placeholder="Select primary market" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="US">United States</SelectItem>
                            <SelectItem value="EU/UK">Europe/UK</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {step1Form.formState.errors.geography && (
                      <p className="text-red-400 text-sm mt-1">{step1Form.formState.errors.geography.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-200 mb-2">
                      Annual Recurring Revenue (ARR) in € *
                    </label>
                    <Input
                      type="number"
                      placeholder="e.g. 500000"
                      className="bg-zinc-800 border-zinc-700 text-zinc-100"
                      {...step1Form.register('arr', { valueAsNumber: true })}
                    />
                    {step1Form.formState.errors.arr && (
                      <p className="text-red-400 text-sm mt-1">{step1Form.formState.errors.arr.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-200 mb-2">
                      Gross Margin (%) *
                    </label>
                    <Input
                      type="number"
                      placeholder="75"
                      className="bg-zinc-800 border-zinc-700 text-zinc-100"
                      {...step1Form.register('grossMargin', { valueAsNumber: true })}
                    />
                    <p className="text-zinc-500 text-xs mt-1">Default: 75% (typical for SaaS)</p>
                    {step1Form.formState.errors.grossMargin && (
                      <p className="text-red-400 text-sm mt-1">{step1Form.formState.errors.grossMargin.message}</p>
                    )}
                  </div>

                  <Button type="submit" className="w-full bg-gradient-brand hover:opacity-90">
                    Continue to Growth Metrics
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-zinc-100 mb-2">Growth & Retention</h3>
                  <p className="text-zinc-400 text-sm">Optional metrics to improve accuracy - you can skip this step</p>
                </div>

                <form onSubmit={step2Form.handleSubmit(onStep2Submit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-zinc-200 mb-2">
                        MRR Growth % (MoM)
                      </label>
                      <Input
                        type="number"
                        placeholder="5"
                        className="bg-zinc-800 border-zinc-700 text-zinc-100"
                        {...step2Form.register('mrrGrowth', { valueAsNumber: true })}
                      />
                      <p className="text-zinc-500 text-xs mt-1">Default: 5%</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-zinc-200 mb-2">
                        Logo Churn % (monthly)
                      </label>
                      <Input
                        type="number"
                        placeholder="3"
                        className="bg-zinc-800 border-zinc-700 text-zinc-100"
                        {...step2Form.register('logoChurn', { valueAsNumber: true })}
                      />
                      <p className="text-zinc-500 text-xs mt-1">Default: 3%</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-zinc-200 mb-2">
                        Net Revenue Retention (%)
                      </label>
                      <Input
                        type="number"
                        placeholder="Optional"
                        className="bg-zinc-800 border-zinc-700 text-zinc-100"
                        {...step2Form.register('nrr', { valueAsNumber: true })}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-zinc-200 mb-2">
                        ARPU/ACV (€)
                      </label>
                      <Input
                        type="number"
                        placeholder="Optional"
                        className="bg-zinc-800 border-zinc-700 text-zinc-100"
                        {...step2Form.register('arpu', { valueAsNumber: true })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-zinc-200 mb-2">
                        Number of Customers
                      </label>
                      <Input
                        type="number"
                        placeholder="Optional"
                        className="bg-zinc-800 border-zinc-700 text-zinc-100"
                        {...step2Form.register('customers', { valueAsNumber: true })}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-zinc-200 mb-2">
                        Sales Model
                      </label>
                      <Controller
                        name="salesModel"
                        control={step2Form.control}
                        render={({ field }) => (
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger className="bg-zinc-800 border-zinc-700 text-zinc-100">
                              <SelectValue placeholder="Select sales model" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Self-serve">Self-serve</SelectItem>
                              <SelectItem value="Sales-assisted">Sales-assisted</SelectItem>
                              <SelectItem value="Enterprise">Enterprise</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button type="button" variant="outline" onClick={goBack} className="flex-1">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                    <Button type="submit" className="flex-1 bg-gradient-brand hover:opacity-90">
                      Continue to Contact Info
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-zinc-100 mb-2">Get Your Valuation</h3>
                  <p className="text-zinc-400 text-sm">Almost done! Just your contact info and we'll show your results.</p>
                </div>

                <form onSubmit={step3Form.handleSubmit(onStep3Submit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-zinc-200 mb-2">
                        Full Name *
                      </label>
                      <Input
                        placeholder="John Smith"
                        className="bg-zinc-800 border-zinc-700 text-zinc-100"
                        {...step3Form.register('fullName')}
                      />
                      {step3Form.formState.errors.fullName && (
                        <p className="text-red-400 text-sm mt-1">{step3Form.formState.errors.fullName.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-zinc-200 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        className="bg-zinc-800 border-zinc-700 text-zinc-100"
                        {...step3Form.register('email')}
                      />
                      {step3Form.formState.errors.email && (
                        <p className="text-red-400 text-sm mt-1">{step3Form.formState.errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-zinc-200 mb-2">
                        Phone (optional)
                      </label>
                      <Input
                        type="tel"
                        placeholder="+1 555 123 4567"
                        className="bg-zinc-800 border-zinc-700 text-zinc-100"
                        {...step3Form.register('phone')}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-zinc-200 mb-2">
                        Company (optional)
                      </label>
                      <Input
                        placeholder="Acme Corp"
                        className="bg-zinc-800 border-zinc-700 text-zinc-100"
                        {...step3Form.register('company')}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-200 mb-2">
                      Website (optional)
                    </label>
                    <Input
                      type="url"
                      placeholder="https://company.com"
                      className="bg-zinc-800 border-zinc-700 text-zinc-100"
                      {...step3Form.register('website')}
                    />
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-zinc-800/50 rounded-lg">
                    <Controller
                      name="consent"
                      control={step3Form.control}
                      render={({ field }) => (
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="mt-1"
                        />
                      )}
                    />
                    <div>
                      <p className="text-sm text-zinc-300">
                        I agree to be contacted by Monoclick.ai about AI automation opportunities. *
                      </p>
                      {step3Form.formState.errors.consent && (
                        <p className="text-red-400 text-sm mt-1">{step3Form.formState.errors.consent.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button type="button" variant="outline" onClick={goBack} className="flex-1">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                    <Button type="submit" disabled={isLoading} className="flex-1 bg-gradient-brand hover:opacity-90">
                      {isLoading ? 'Calculating...' : 'Get My Valuation'}
                      {!isLoading && <TrendingUp className="ml-2 h-4 w-4" />}
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}

            {currentStep === 4 && valuation && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-brand rounded-full mb-4">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-zinc-100 mb-2">
                    Your SaaS Valuation
                  </h3>
                  <p className="text-zinc-400">Based on current market conditions and your metrics</p>
                </div>

                <div className="bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-2xl p-6 mb-6 border border-indigo-500/20">
                  <div className="text-center mb-4">
                    <div className="text-sm text-zinc-400 mb-2">Estimated Valuation Range</div>
                    <motion.div
                      className="text-3xl font-heading font-bold text-gradient mb-1"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {formatCurrency(animatedValuation.low)} - {formatCurrency(animatedValuation.high)}
                    </motion.div>
                    <motion.div
                      className="text-lg text-zinc-300"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      Point Estimate: <span className="font-semibold text-gradient">{formatCurrency(animatedValuation.point)}</span>
                    </motion.div>
                    <motion.div
                      className="text-sm text-zinc-400 mt-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      Multiple: {valuation.multiple.toFixed(1)}x ARR
                    </motion.div>
                  </div>
                </div>

                {valuation.insights && valuation.insights.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-zinc-100 mb-3">Key Insights</h4>
                    <div className="space-y-2">
                      {valuation.insights.map((insight: string, index: number) => (
                        <div key={index} className="flex items-start space-x-2 text-sm text-zinc-300">
                          <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{insight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-zinc-800/50 rounded-xl p-4 mb-6">
                  <p className="text-xs text-zinc-400 text-center">
                    <strong>Disclaimer:</strong> This is an educational estimate based on market data and your inputs.
                    It is not financial advice and actual valuations may vary significantly based on due diligence,
                    market conditions, and specific buyer requirements.
                  </p>
                </div>

                <div className="text-center">
                  <div className="mb-4 p-3 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-lg border border-red-500/20">
                    <p className="text-sm text-orange-300 font-medium">
                      Want to discover how AI can 10x your SaaS valuation?
                    </p>
                    <p className="text-xs text-red-300 mt-1">
                      Only <span className="font-bold">3 spots left</span> for scaling projects this month (September 2025)
                    </p>
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-brand hover:opacity-90 text-lg px-8 py-6 h-auto shadow-lg shadow-indigo-500/25 animate-pulse"
                  >
                    <a
                      href="https://calendly.com/henrybuisseret/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Calendar className="mr-3 h-5 w-5" />
                      Claim Your FREE Strategy Call
                      <ExternalLink className="ml-3 h-4 w-4" />
                    </a>
                  </Button>

                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-zinc-300 font-medium flex items-center">
                      <span className="mr-2 flex-shrink-0 w-4 h-4 rounded-full bg-white flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-zinc-900" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      30-minute personalized AI roadmap
                    </p>
                    <p className="text-sm text-zinc-300 font-medium flex items-center">
                      <span className="mr-2 flex-shrink-0 w-4 h-4 rounded-full bg-white flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-zinc-900" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      Identify your biggest automation opportunities
                    </p>
                    <p className="text-sm text-zinc-300 font-medium flex items-center">
                      <span className="mr-2 flex-shrink-0 w-4 h-4 rounded-full bg-white flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-zinc-900" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      Get exact steps to increase your multiple by 2-3x
                    </p>
                    {/* <p className="text-xs text-zinc-500 mt-3">
                      No pitch, no pressure - just actionable insights for your business
                    </p> */}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  )
}
