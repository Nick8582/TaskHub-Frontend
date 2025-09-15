import type { Metadata } from 'next'

import { getServerProfile } from '@/services/profile/profile-server.service'
import { getServerTasks, getServerTodayTasks } from '@/services/tasks/task-server.service'
import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'
import { DashboardPage } from '@/view/dashboard'

export const metadata: Metadata = {
  title: 'Dashboard',
  ...NO_INDEX_PAGE,
}

export default async function DashboardPageRoot() {
  const [tasks, tasksToday] = await Promise.all([getServerTasks(), getServerTodayTasks()])

  const data = await getServerProfile()

  return (
    <DashboardPage tasks={tasks.data || []} tasksToday={tasksToday.data || []} userId={data.id} />
  )
}
