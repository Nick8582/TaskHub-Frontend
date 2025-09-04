import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'
import { DashboardPage } from '@/view/dashboard'

export const metadata: Metadata = {
  title: 'Dashboard',
  ...NO_INDEX_PAGE,
}

export default function DashboardPageRoot() {
  return <DashboardPage />
}
