import React from 'react'
import { IndexPanel } from '../../ui/IndexPanel'
import { useMacroIndexes } from '../../../hooks/useMacroIndexes'

export function SentimentHub() {
  const { vix, vvix, fearGreed, putCall, junkBondSpread, highBetaRatio } = useMacroIndexes()

  return (
    <section className="space-y-6">
      <header>
        <h2 className="text-2xl font-semibold">Sentiment Hub</h2>
        <p className="mt-2 text-sm text-slate-400">Risk & analysis indicators from VIX, VVIX, and put/call market positioning.</p>
      </header>
      <div className="grid gap-5 md:grid-cols-3">
        <IndexPanel title="VIX" value={vix.toFixed(1)} subtitle="S&P 500 implied volatility" variant={vix > 20 ? 'negative' : 'neutral'} />
        <IndexPanel title="VVIX" value={vvix.toFixed(1)} subtitle="Volatility of volatility" variant={vvix > 100 ? 'negative' : 'neutral'} />
        <IndexPanel title="Fear & Greed" value={`${fearGreed}`} subtitle={`Market bias: ${fearGreed >= 50 ? 'Greed' : 'Fear'}`} variant={fearGreed >= 50 ? 'positive' : 'negative'} />
        <IndexPanel title="Put/Call Ratio" value={putCall.toFixed(2)} subtitle="Options sentiment gauge" variant={putCall > 1 ? 'negative' : 'positive'} />
        <IndexPanel title="Junk Bond Spread" value={`${junkBondSpread.toFixed(1)}%`} subtitle="Credit stress signal" variant={junkBondSpread > 5 ? 'negative' : 'neutral'} />
        <IndexPanel title="High-Beta Ratio" value={highBetaRatio.toFixed(2)} subtitle="Risk-on vs. risk-off breadth" variant={highBetaRatio > 1.2 ? 'positive' : 'neutral'} />
      </div>
    </section>
  )
}
