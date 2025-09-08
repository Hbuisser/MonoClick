export interface ValuationParams {
  arr: number
  businessType: string
  geography: string
  grossMargin: number
  mrrGrowth?: number
  logoChurn?: number
  nrr?: number
  arpu?: number
  customers?: number
  salesModel?: string
}

export interface ValuationResult {
  pointEstimate: number
  lowEstimate: number
  highEstimate: number
  multiple: number
  insights: string[]
}

export function estimateValuation(params: ValuationParams): ValuationResult {
  const {
    arr,
    businessType,
    geography,
    grossMargin,
    mrrGrowth = 5,
    logoChurn = 3,
    nrr,
    salesModel = 'Sales-assisted'
  } = params

  // Baseline multiple by ARR
  let baselineMultiple = 2.0
  if (arr >= 250000 && arr < 1000000) baselineMultiple = 3.0
  else if (arr >= 1000000 && arr < 3000000) baselineMultiple = 4.0
  else if (arr >= 3000000 && arr < 10000000) baselineMultiple = 5.0
  else if (arr >= 10000000) baselineMultiple = 6.0

  // Business type modifier
  let typeModifier = 0.0
  switch (businessType) {
    case 'AI SaaS': typeModifier = 0.5; break
    case 'Developer Tooling': typeModifier = 0.3; break
    case 'Fintech':
    case 'Healthcare': typeModifier = 0.4; break
    case 'Marketing/Sales': typeModifier = 0.1; break
    case 'Marketplace (SaaS-like)': typeModifier = -0.3; break
    default: typeModifier = 0.0 // Generic SaaS
  }

  // Growth modifier (MRR % MoM)
  let growthModifier = 0.0
  if (mrrGrowth < 0) growthModifier = -0.7
  else if (mrrGrowth >= 0 && mrrGrowth < 2) growthModifier = -0.3
  else if (mrrGrowth >= 2 && mrrGrowth <= 5) growthModifier = 0.0
  else if (mrrGrowth > 5 && mrrGrowth <= 10) growthModifier = 0.4
  else if (mrrGrowth > 10) growthModifier = 0.8

  // Churn modifier
  let churnModifier = 0.0
  if (logoChurn > 7) churnModifier = -0.8
  else if (logoChurn >= 4 && logoChurn <= 7) churnModifier = -0.3
  else if (logoChurn >= 2 && logoChurn < 4) churnModifier = 0.1
  else if (logoChurn < 2) churnModifier = 0.4

  // NRR bonus
  let nrrModifier = 0.0
  if (nrr !== undefined) {
    if (nrr < 90) nrrModifier = -0.4
    else if (nrr >= 90 && nrr <= 110) nrrModifier = 0.0
    else if (nrr > 110) nrrModifier = 0.4
  }

  // Gross margin modifier
  let marginModifier = 0.0
  if (grossMargin < 60) marginModifier = -0.4
  else if (grossMargin >= 60 && grossMargin < 75) marginModifier = -0.1
  else if (grossMargin >= 75 && grossMargin <= 85) marginModifier = 0.1
  else if (grossMargin > 85) marginModifier = 0.3

  // Geography modifier
  let geoModifier = 0.0
  switch (geography) {
    case 'US': geoModifier = 0.2; break
    case 'EU/UK': geoModifier = 0.1; break
    default: geoModifier = 0.0 // Other
  }

  // Sales model modifier
  let salesModifier = 0.0
  switch (salesModel) {
    case 'Self-serve': salesModifier = 0.1; break
    case 'Sales-assisted': salesModifier = 0.0; break
    case 'Enterprise': salesModifier = 0.1; break
  }

  // Calculate final multiple (clamped between 1.0x and 12.0x)
  const totalModifiers = typeModifier + growthModifier + churnModifier + nrrModifier + marginModifier + geoModifier + salesModifier
  const midMultiple = Math.max(1.0, Math.min(12.0, baselineMultiple + totalModifiers))

  const lowMultiple = Math.max(1.0, midMultiple - 0.8)
  const highMultiple = Math.min(12.0, midMultiple + 0.8)

  // Calculate valuations
  const pointEstimate = arr * midMultiple
  const lowEstimate = arr * lowMultiple
  const highEstimate = arr * highMultiple

  // Generate insights
  const insights = generateInsights({
    businessType,
    mrrGrowth,
    logoChurn,
    grossMargin,
    nrr,
    geography,
    salesModel,
    multiple: midMultiple,
    arr
  })

  return {
    pointEstimate,
    lowEstimate,
    highEstimate,
    multiple: midMultiple,
    insights
  }
}

function generateInsights(params: {
  businessType: string
  mrrGrowth: number
  logoChurn: number
  grossMargin: number
  nrr?: number
  geography: string
  salesModel: string
  multiple: number
  arr: number
}): string[] {
  const insights: string[] = []

  // Business type insights
  if (params.businessType === 'AI SaaS') {
    insights.push('AI SaaS commands premium multiples due to high growth potential and competitive moats.')
  } else if (params.businessType === 'Developer Tooling') {
    insights.push('Developer tools benefit from strong user loyalty and high switching costs.')
  }

  // Growth insights
  if (params.mrrGrowth > 10) {
    insights.push('Exceptional growth rate significantly boosts valuation multiples.')
  } else if (params.mrrGrowth < 2) {
    insights.push('Low growth rate is a concern for potential acquirers and investors.')
  }

  // Churn insights
  if (params.logoChurn < 2) {
    insights.push('Excellent customer retention indicates strong product-market fit.')
  } else if (params.logoChurn > 7) {
    insights.push('High churn rate significantly impacts valuation - focus on retention improvements.')
  }

  // Margin insights
  if (params.grossMargin > 85) {
    insights.push('Exceptional gross margins demonstrate strong unit economics.')
  } else if (params.grossMargin < 60) {
    insights.push('Gross margins below 60% may concern potential acquirers.')
  }

  // NRR insights
  if (params.nrr && params.nrr > 110) {
    insights.push('Net revenue retention above 110% shows strong expansion potential.')
  }

  // Scale insights
  if (params.arr > 10000000) {
    insights.push('At this scale, strategic acquirers may pay premium multiples.')
  } else if (params.arr < 250000) {
    insights.push('Early-stage SaaS typically trades at lower multiples until proven at scale.')
  }

  // Geography insights
  if (params.geography === 'US') {
    insights.push('US market presence typically commands higher valuation multiples.')
  }

  return insights.slice(0, 3) // Return max 3 insights
}

export function formatCurrency(amount: number): string {
  if (amount >= 1000000) {
    return `€${(amount / 1000000).toFixed(1)}M`
  } else if (amount >= 1000) {
    return `€${(amount / 1000).toFixed(0)}K`
  } else {
    return `€${amount.toLocaleString()}`
  }
}
