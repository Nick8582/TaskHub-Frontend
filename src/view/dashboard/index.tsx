'use client'

import { type FC } from 'react'

import type { TGetTasksResponse, TGetTodayTasksResponse } from '@/types/task.types'
import { Heading } from '@/ui/Heading'
import { SearchField } from '@/ui/SearchField'
import { ProjectStatisticChart } from '@/view/dashboard/components/chart/ProjectStatisticChart'
import { Chat } from '@/view/dashboard/components/chat'
import { LastTasks } from '@/view/dashboard/components/last-tasks/LastTasks'
import { ProjectStats } from '@/view/dashboard/components/stat/ProjectStats'
import { TaskTimeline } from '@/view/dashboard/components/task-timeline/TaskTimeline'

interface DashboardPageProps {
  tasks: TGetTasksResponse
  tasksToday: TGetTodayTasksResponse
}

export const DashboardPage: FC<DashboardPageProps> = ({ tasks, tasksToday }) => {
  return (
    <div className='grid h-screen grid-cols-[3.5fr_1fr] gap-1'>
      <div className='overflow-y-auto p-5'>
        <div className='mb-6 flex items-center justify-between'>
          <Heading>Dashboard</Heading>
          <SearchField value='' onChange={() => {}} />
        </div>
        <div className='mb-6 grid grid-cols-[0.9fr_2fr] gap-6'>
          <ProjectStats />
          <ProjectStatisticChart />
        </div>
        <LastTasks tasks={tasks} />
        <TaskTimeline tasks={tasksToday} />
      </div>
      <Chat />
    </div>
  )
}
