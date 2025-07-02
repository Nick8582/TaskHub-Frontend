export type TimeRangeValue = "yearly" | "monthly"

export interface TimeRange {
  label: string
  value: TimeRangeValue
}

export interface ChartDataPoint {
  period: string
  value: number
}
