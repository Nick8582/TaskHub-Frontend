import type { FC } from 'react'

import type { LucideIcon } from 'lucide-react'

import type { IconProps } from '@/components/animate-ui/icons/icon'
import type { DashboardPages } from '@/shared/constants/dashboard-pages.constants'

export interface IMenuItem {
  icon: FC<IconProps<'default'>> | LucideIcon
  label: string
  href: DashboardPages
}
