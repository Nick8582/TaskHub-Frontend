"use client"

import { useState, type FC } from "react"

import type { TimeRange } from "@/src/shared/types/dashboard/project-charts.type"
import { Card } from "@/src/shared/ui/card"
import {
  monthlyData,
  timeRanges,
  yearlyData,
} from "@/src/widget/chart/mock-data"
import { ProjectChart } from "@/src/widget/chart/ui/chart"
import { ChartHeader } from "@/src/widget/chart/ui/header"

interface ChartProps {
  className?: string
}

export const Chart: FC<ChartProps> = ({ className }) => {
  const [selectRange, setSelectRange] = useState<TimeRange>(timeRanges[0])

  const chartData = selectRange.value === "yearly" ? yearlyData : monthlyData

  return (
    <Card className={className} color="dashboard">
      <ChartHeader selectRange={selectRange} setSelectRange={setSelectRange} />
      <ProjectChart data={chartData} />
    </Card>
  )
}
