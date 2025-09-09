import type { LucideIcon } from 'lucide-react'

import type { DashboardPages } from '@/shared/constants/dashboard-pages.constants'

export interface IMenuItem {
  icon: LucideIcon
  label: string
  href: DashboardPages
}
