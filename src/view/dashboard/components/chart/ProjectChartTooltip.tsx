import type { FC } from "react"

interface ProjectChartTooltipProps {
  active?: boolean
  payload?: Array<{ value: number }>
}

export const ProjectChartTooltip: FC<ProjectChartTooltipProps> = ({
  active,
  payload,
}) => {
  if (!active || !payload || payload.length === 0) return null

  return (
    <div className="rounded-2xl bg-primary px-2.5 py-1.5 text-sm font-medium text-white shadow">
      {payload[0].value} Projects
    </div>
  )
}
