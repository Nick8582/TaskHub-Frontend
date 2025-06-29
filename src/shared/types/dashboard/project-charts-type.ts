export interface TimeRange {
  label: string
  value: "yearly" | "monthly"
}

export interface ChartDataPoint {
  period: string
  value: number
}
