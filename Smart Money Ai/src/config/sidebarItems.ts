export type SidebarModule = {
  id: string
  label: string
  description: string
  category: string
  path: string
}

export const sidebarItems: SidebarModule[] = [
  {
    id: 'live-desk',
    label: 'Live Desk',
    description: 'Streaming market alerts and flash headlines',
    category: 'MEDIA & STREAMING',
    path: '/modules/media/LiveDesk',
  },
  {
    id: 'markets-diary',
    label: 'Markets Diary',
    description: 'WSJ-style morning briefings and macro commentary',
    category: 'MEDIA & STREAMING',
    path: '/modules/media/MarketsDiary',
  },
  {
    id: 'executive-summary',
    label: 'Executive Summary',
    description: 'AI-summarized transcripts and earnings highlights',
    category: 'MEDIA & STREAMING',
    path: '/modules/media/ExecutiveSummary',
  },
  {
    id: 'historical-multi-asset-chart',
    label: 'Historical Multi-Asset Chart',
    description: 'Stocks, commodities, and yield overlays in one view',
    category: 'GRAPHING & VISUALIZATION',
    path: '/modules/visual/HistoricalMultiAssetChart',
  },
  {
    id: 'valuation-matrix',
    label: 'Valuation Matrix',
    description: 'Forward multiples, comps, and peer tables',
    category: 'GRAPHING & VISUALIZATION',
    path: '/modules/visual/ValuationMatrix',
  },
  {
    id: 'earnings-calendar-scatter',
    label: 'Earnings Calendar Scatterplot',
    description: 'EPS surprise maps and event timing visuals',
    category: 'GRAPHING & VISUALIZATION',
    path: '/modules/visual/EarningsCalendarScatter',
  },
  {
    id: 'terminal-50',
    label: 'The Terminal 50',
    description: 'Dynamic IBD-style growth ranking and CAN SLIM filter',
    category: 'STRATEGY & CAN SLIM',
    path: '/modules/strategy/Terminal50',
  },
  {
    id: 'pivot-breakout-alerts',
    label: 'Pivot Breakout Alert System',
    description: 'Base breakouts and volume surge alerts',
    category: 'STRATEGY & CAN SLIM',
    path: '/modules/strategy/PivotBreakoutAlerts',
  },
  {
    id: 'industry-group-momentum',
    label: 'Industry Group Momentum',
    description: 'Sector rotation rankings across 197 groups',
    category: 'STRATEGY & CAN SLIM',
    path: '/modules/strategy/IndustryGroupMomentum',
  },
]
