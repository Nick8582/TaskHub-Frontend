'use client'

import { useEffect, type FC } from 'react'

import { taskStore } from '@/stores/task.store'
import type { TTask } from '@/types/task.types'
import { Heading } from '@/ui/Heading'
import { SearchField } from '@/ui/SearchField'
import { ProjectStatisticChart } from '@/view/dashboard/components/chart/ProjectStatisticChart'
import { LastTasks } from '@/view/dashboard/components/last-tasks/LastTasks'
import { ProjectStats } from '@/view/dashboard/components/stat/ProjectStats'
import { TaskTimeline } from '@/view/dashboard/components/task-timeline/TaskTimeline'

interface DashboardPageProps {
  tasks: TTask[]
}

export const DashboardPage: FC<DashboardPageProps> = ({ tasks }) => {
  useEffect(() => {
    taskStore.loadStoreFromServer(tasks)
  }, [])
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
        <TaskTimeline />
      </div>
      <div className='flex h-screen items-center justify-center p-5'>CHAT</div>
    </div>
  )
}
