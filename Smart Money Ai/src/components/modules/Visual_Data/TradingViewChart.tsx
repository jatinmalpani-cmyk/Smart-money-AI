import React, { useEffect, useMemo, useRef } from 'react'

interface TradingViewChartProps {
  symbol: string
}

export default function TradingViewChart({ symbol }: TradingViewChartProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetId = useMemo(() => `tv-widget-${Math.random().toString(36).slice(2)}`, [])

  useEffect(() => {
    if (!containerRef.current) {
      return
    }

    containerRef.current.innerHTML = ''

    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/tv.js'
    script.type = 'text/javascript'
    script.async = true
    script.onload = () => {
      if (typeof window !== 'undefined' && (window as any).TradingView) {
        const symbolWithPrefix = symbol.includes(':') ? symbol : `NASDAQ:${symbol}`

        new (window as any).TradingView.widget({
          autosize: true,
          symbol: symbolWithPrefix,
          interval: 'D',
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '1',
          locale: 'en',
          toolbar_bg: '#020617',
          enable_publishing: false,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          container_id: widgetId,
          studies: ['RSI@tv-basicstudies', 'MASimple@tv-basicstudies'],
          withdateranges: true,
          hideideas: true,
        })
      }
    }

    document.head.appendChild(script)

    return () => {
      script.remove()
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
    }
  }, [symbol, widgetId])

  return (
    <div className="w-full h-full border border-slate-800 rounded-3xl overflow-hidden bg-slate-950 shadow-xl">
      <div id={widgetId} ref={containerRef} className="w-full h-[560px]" />
    </div>
  )
}
