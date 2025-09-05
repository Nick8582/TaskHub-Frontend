'use client'

import type { FC } from 'react'

import { Heading } from '@/ui/Heading'
import { SearchField } from '@/ui/SearchField'
import { ProjectStatisticChart } from '@/view/dashboard/components/chart/ProjectStatisticChart'
import { LastTasks } from '@/view/dashboard/components/last-tasks/LastTasks'
import { ProjectStats } from '@/view/dashboard/components/stat/ProjectStats'

export const DashboardPage: FC = () => {
  return (
    <div className='grid grid-cols-[2.7fr_1fr] gap-6'>
      <div>
        <div className='mb-6 flex items-center justify-between'>
          <Heading>Dashboard</Heading>
          <SearchField value='' onChange={() => {}} />
        </div>
        <div className='mb-6 grid grid-cols-[25%_75%] gap-7'>
          <ProjectStats />
          <ProjectStatisticChart />
        </div>
        <LastTasks />
      </div>
      <div className='flex h-screen items-center justify-center p-5'>CHAT</div>
    </div>
  )
}
