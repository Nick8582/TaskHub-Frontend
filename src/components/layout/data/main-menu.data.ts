import { CalendarDays, NotebookText } from 'lucide-react'

import { ChartNoAxesColumn } from '@/components/animate-ui/icons/chart-no-axes-column'
import { LayoutDashboard } from '@/components/animate-ui/icons/layout-dashboard'
import { MessageCircleMore } from '@/components/animate-ui/icons/message-circle-more'
import { Settings } from '@/components/animate-ui/icons/settings'
import { UsersRound } from '@/components/animate-ui/icons/users-round'
import type { IMenuItem } from '@/components/layout/menu/menu.types'
import { DashboardPages } from '@/shared/constants/dashboard-pages.constants'

export const MAIN_MENU: IMenuItem[] = [
  {
    icon: LayoutDashboard,
    label: 'Dashboard',
    href: DashboardPages.DASHBOARD,
  },
  {
    icon: MessageCircleMore,
    label: 'Messages',
    href: DashboardPages.MESSAGES,
  },
  {
    icon: ChartNoAxesColumn,
    label: 'Insight',
    href: DashboardPages.INSIGHT,
  },
  {
    icon: UsersRound,
    label: 'Team',
    href: DashboardPages.TEAM,
  },
  {
    icon: CalendarDays,
    label: 'Schedule',
    href: DashboardPages.SCHEDULE,
  },
  {
    icon: NotebookText,
    label: 'Report',
    href: DashboardPages.REPORT,
  },
  {
    icon: Settings,
    label: 'Settings',
    href: DashboardPages.SETTINGS,
  },
]
