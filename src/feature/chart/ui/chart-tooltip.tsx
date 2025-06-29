import type { FC } from "react"

interface ChartTooltipProps {
  active?: boolean
  payload?: Array<{ value: number }>
}

export const ChartTooltip: FC<ChartTooltipProps> = ({ active, payload }) => {
  if (!active || !payload || payload.length === 0) return null
  return (
    <div className="bg-primary rounded-lg px-2.5 py-1.5 text-white shadow">
      {payload[0].value} Projects
    </div>
  )
}
