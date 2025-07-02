"use client"

import { useState, type FC } from "react"

import { monthlyData, yearlyData } from "@/src/data/chart.data"
import { timeRanges } from "@/src/shared/constants/chart-time-range.constants"
import type { TimeRangeValue } from "@/src/shared/types/dashboard/project-charts.type"
import { Card } from "@/src/shared/ui/card"
import { ProjectChart } from "@/src/widget/chart/ui/chart"
import { ChartHeader } from "@/src/widget/chart/ui/header"

interface ChartProps {
  className?: string
}

export const Chart: FC<ChartProps> = ({ className }) => {
  const [selectRange, setSelectRange] = useState<TimeRangeValue>(
    timeRanges[0].value
  )

  const chartData = selectRange === "yearly" ? yearlyData : monthlyData

  return (
    <Card className={className} color="dashboard">
      <ChartHeader selectedValue={selectRange} onSelectRange={setSelectRange} />
      <ProjectChart data={chartData} />
    </Card>
  )
}
