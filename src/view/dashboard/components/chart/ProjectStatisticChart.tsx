import { useState, type FC } from 'react'

import type { ITimeRange } from '@/types/project-chart.types'
import { ProjectChart } from '@/view/dashboard/components/chart/ProjectChart'
import { ProjectChartHeader } from '@/view/dashboard/components/chart/ProjectChartHeader'
import { monthlyData, timeRanges, yearlyData } from '@/view/dashboard/data/project-chart.data'

export const ProjectStatisticChart: FC = () => {
  const [selectedRange, setSelectedRange] = useState<ITimeRange>(timeRanges[0])

  const chartData = selectedRange.value === 'yearly' ? yearlyData : monthlyData
  return (
    <div className='h-full rounded-2xl bg-white p-5'>
      <ProjectChartHeader selectedRange={selectedRange} onRangeChange={setSelectedRange} />
      <ProjectChart data={chartData} />
    </div>
  )
}
