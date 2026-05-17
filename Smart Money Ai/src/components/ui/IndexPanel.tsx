import React from 'react'

interface IndexPanelProps {
  title: string
  value: string
  subtitle: string
  variant?: 'positive' | 'negative' | 'neutral'
}

const variantStyles: Record<NonNullable<IndexPanelProps['variant']>, string> = {
  positive: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-300',
  negative: 'border-rose-500/20 bg-rose-500/10 text-rose-300',
  neutral: 'border-sky-400/20 bg-sky-400/10 text-sky-200',
}

export function IndexPanel({ title, value, subtitle, variant = 'neutral' }: IndexPanelProps) {
  return (
    <div className={`rounded-3xl border px-5 py-4 shadow-sm ${variantStyles[variant]}`}>
      <div className="text-xs uppercase tracking-[0.26em] text-slate-400">{title}</div>
      <div className="mt-3 text-3xl font-semibold tracking-tight">{value}</div>
      <div className="mt-2 text-sm text-slate-300">{subtitle}</div>
    </div>
  )
}
