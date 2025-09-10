import type { Metadata } from 'next'

import { taskServerGetAll } from '@/services/tasks/task-server.service'
import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'
import { DashboardPage } from '@/view/dashboard'

export const metadata: Metadata = {
  title: 'Dashboard',
  ...NO_INDEX_PAGE,
}

export default async function DashboardPageRoot() {
  const { data } = await taskServerGetAll()

  console.log('TASKS', data)

  return <DashboardPage />
}
