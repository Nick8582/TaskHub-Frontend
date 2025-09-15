import type { Metadata } from 'next'

import { getServerProfile } from '@/services/profile/profile-server.service'
import { getServerProjectChartData } from '@/services/statistics/chart/project-chart-server.service'
import { getServerProjectStats } from '@/services/statistics/project-stat-server.service'
import { getServerTasks, getServerTodayTasks } from '@/services/tasks/task-server.service'
import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'
import { DashboardPage } from '@/view/dashboard'

export const metadata: Metadata = {
  title: 'Dashboard',
  ...NO_INDEX_PAGE,
}

export default async function DashboardPageRoot() {
  const [tasks, tasksToday, projectStats, projectChartData] = await Promise.all([
    getServerTasks(),
    getServerTodayTasks(),
    getServerProjectStats(),
    getServerProjectChartData('yearly'),
  ])

  const data = await getServerProfile()

  return (
    <DashboardPage
      tasks={tasks.data || []}
      tasksToday={tasksToday.data || []}
      userId={data.id}
      projectStats={projectStats.data || []}
      projectChartData={projectChartData.data || []}
    />
  )
}
