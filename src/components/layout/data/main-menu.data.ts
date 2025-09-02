import {
  CalendarDays,
  ChartNoAxesColumn,
  LayoutGrid,
  MessageCircleMore,
  NotebookText,
  Settings,
  UserRound,
} from "lucide-react"

import type { IMenuItem } from "@/components/layout/menu/menu.types"
import { Pages } from "@/shared/constants/page.constants"

export const MAIN_MENU: IMenuItem[] = [
  {
    icon: LayoutGrid,
    label: "Dashboard",
    href: Pages.DASHBOARD,
  },
  {
    icon: MessageCircleMore,
    label: "Messages",
    href: Pages.MESSAGES,
  },
  {
    icon: ChartNoAxesColumn,
    label: "Insight",
    href: Pages.INSIGHT,
  },
  {
    icon: UserRound,
    label: "Team",
    href: Pages.TEAM,
  },
  {
    icon: CalendarDays,
    label: "Schedule",
    href: Pages.SCHEDULE,
  },
  {
    icon: NotebookText,
    label: "Report",
    href: Pages.REPORT,
  },
  {
    icon: Settings,
    label: "Settings",
    href: Pages.SETTINGS,
  },
]
