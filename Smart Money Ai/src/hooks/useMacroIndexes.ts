import { useMemo } from 'react'

export interface MacroIndexData {
  vix: number
  vvix: number
  fearGreed: number
  putCall: number
  junkBondSpread: number
  highBetaRatio: number
  bigMacPPP: string
  menuPriceInflation: number
  cardboardBoxIndex: number
  fedBalanceSheetBillion: number
  yieldCurveSpread: number
  netLiquidityBillion: number
}

export function useMacroIndexes() {
  return useMemo<MacroIndexData>(() => {
    return {
      vix: 16.8,
      vvix: 92.3,
      fearGreed: 61,
      putCall: 0.82,
      junkBondSpread: 4.5,
      highBetaRatio: 1.38,
      bigMacPPP: 'USD_OVERVALUED_8%',
      menuPriceInflation: 7.2,
      cardboardBoxIndex: 74,
      fedBalanceSheetBillion: 8_125,
      yieldCurveSpread: -0.24,
      netLiquidityBillion: 185,
    }
  }, [])
}
