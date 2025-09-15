import { useState, type FC } from 'react'

import { useQuery } from '@tanstack/react-query'

import { getClientProjectChartData } from '@/services/statistics/chart/project-chart-client.service'
import type { ITimeRange } from '@/types/project-chart.types'
import type { TClientProjectChartDataResponse } from '@/types/statistics.types'
import { ProjectChart } from '@/view/dashboard/components/chart/ProjectChart'
import { ProjectChartHeader } from '@/view/dashboard/components/chart/ProjectChartHeader'
import { timeRanges } from '@/view/dashboard/data/project-chart.data'

interface ProjectStatisticChartProps {
  projectChartData: TClientProjectChartDataResponse
}

export const ProjectStatisticChart: FC<ProjectStatisticChartProps> = ({ projectChartData }) => {
  const [selectedRange, setSelectedRange] = useState<ITimeRange>(timeRanges[0])

  const { data } = useQuery({
    queryKey: ['project-statistics-chart-data', selectedRange.value],
    queryFn: () => getClientProjectChartData(selectedRange.value),
    initialData: projectChartData,
  })

  return (
    <div className='h-full w-full rounded-2xl bg-card p-5'>
      <ProjectChartHeader selectedRange={selectedRange} onRangeChange={setSelectedRange} />
      <ProjectChart data={data || []} />
    </div>
  )
}
