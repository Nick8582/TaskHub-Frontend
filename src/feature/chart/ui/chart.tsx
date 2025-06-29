import { useMemo, type FC } from "react"

import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { ChartTooltip } from "@/src/feature/chart/ui/chart-tooltip"
import type { ChartDataPoint } from "@/src/shared/types/dashboard/project-charts-type"

interface ProjectChartProps {
  data: ChartDataPoint[]
}

export const ProjectChart: FC<ProjectChartProps> = ({ data }) => {
  const maxData = useMemo(() => {
    if (!data || data.length === 0) return null
    let maxValue = 0
    let maxPeriod = ""

    data.forEach(item => {
      if (item.value > maxValue) {
        maxValue = item.value
        maxPeriod = item.period
      }
    })

    return { value: maxValue, period: maxPeriod }
  }, [data])

  return (
    <ResponsiveContainer width={"100%"} height={290}>
      <AreaChart data={data} margin={{ left: -20 }}>
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid
          strokeDasharray="0"
          vertical={false}
          stroke="#9CA3AF"
          opacity={0.1}
        />
        <XAxis
          dataKey={"period"}
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: "0.8rem", fontWeight: 500, fill: "#9CA3AF" }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: "0.8rem", fontWeight: 500, fill: "#9CA3AF" }}
          domain={[0, "dataMax + 10"]}
        />
        <Tooltip content={<ChartTooltip />} cursor={false} />
        {maxData && (
          <ReferenceLine
            x={maxData.period}
            stroke="#998AC7"
            strokeDasharray="5 5"
            strokeWidth={1.5}
          />
        )}
        <Area
          type="bump"
          dataKey="value"
          stroke="#6366F1"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorGradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}
