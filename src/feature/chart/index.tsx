"use client"

import { useState, type FC } from "react"

import {
  monthlyData,
  timeRanges,
  yearlyData,
} from "@/src/feature/chart/mock-data"
import { ProjectChart } from "@/src/feature/chart/ui/chart"
import { ChartHeader } from "@/src/feature/chart/ui/header"
import type { TimeRange } from "@/src/shared/types/dashboard/project-charts-type"
import { Card } from "@/src/shared/ui/card"

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
