import React from 'react'
import { IndexPanel } from '../../ui/IndexPanel'
import { useMacroIndexes } from '../../../hooks/useMacroIndexes'

export function AlternativeMacro() {
  const { bigMacPPP, menuPriceInflation, cardboardBoxIndex } = useMacroIndexes()

  return (
    <section className="space-y-6">
      <header>
        <h2 className="text-2xl font-semibold">Alternative Macro</h2>
        <p className="mt-2 text-sm text-slate-400">Real-world price signals and alternative economic gauges for a more behavioral view.</p>
      </header>
      <div className="grid gap-5 md:grid-cols-3">
        <IndexPanel title="Big Mac Index" value={bigMacPPP} subtitle="Purchasing power parity signal" variant="neutral" />
        <IndexPanel title="Menu Price Inflation" value={`${menuPriceInflation.toFixed(1)}%`} subtitle="Consumer staples price pressure" variant={menuPriceInflation > 5 ? 'negative' : 'positive'} />
        <IndexPanel title="Cardboard Box Index" value={`${cardboardBoxIndex}`} subtitle="Logistics and manufacturing lead indicator" variant={cardboardBoxIndex < 80 ? 'negative' : 'positive'} />
      </div>
    </section>
  )
}
