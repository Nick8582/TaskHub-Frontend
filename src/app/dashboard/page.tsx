import type { Metadata } from 'next'

import { taskServerGetAll } from '@/services/tasks/task-server.service'
import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'
import { DashboardPage } from '@/view/dashboard'

export const metadata: Metadata = {
  title: 'Dashboard',
  ...NO_INDEX_PAGE,
}

export default async function DashboardPageRoot() {
  const tasks = await taskServerGetAll()

  if (tasks.error) {
    return <div className='text-red-500'>Failed to load tasks</div>
  }

  return <DashboardPage tasks={tasks.data} />
}
