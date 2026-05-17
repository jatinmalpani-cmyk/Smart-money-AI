import React from 'react'
import { IndexPanel } from '../../ui/IndexPanel'
import { useMacroIndexes } from '../../../hooks/useMacroIndexes'

export function LiquidityMatrix() {
  const { fedBalanceSheetBillion, yieldCurveSpread, netLiquidityBillion } = useMacroIndexes()

  return (
    <section className="space-y-6">
      <header>
        <h2 className="text-2xl font-semibold">Liquidity Matrix</h2>
        <p className="mt-2 text-sm text-slate-400">Central bank plumbing, yield curve dynamics, and market liquidity flow.</p>
      </header>
      <div className="grid gap-5 md:grid-cols-3">
        <IndexPanel title="Fed Balance Sheet" value={`$${fedBalanceSheetBillion.toLocaleString()}B`} subtitle="QT vs. QE signal" variant={fedBalanceSheetBillion >= 8000 ? 'positive' : 'neutral'} />
        <IndexPanel title="Yield Curve Spread" value={`${yieldCurveSpread.toFixed(2)}%`} subtitle="10Y−2Y inversion gauge" variant={yieldCurveSpread < 0 ? 'negative' : 'positive'} />
        <IndexPanel title="Net Liquidity" value={`$${netLiquidityBillion.toLocaleString()}B`} subtitle="Fed balance sheet minus drains" variant={netLiquidityBillion > 0 ? 'positive' : 'negative'} />
      </div>
    </section>
  )
}
