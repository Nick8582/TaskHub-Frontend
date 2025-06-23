import { RouteDashboard } from "@/src/shared/constants/route.constants"
import { DashboardNavigationType } from "@/src/shared/types/dashboard-navigation-type"

export const NAVIGATION_LINK: DashboardNavigationType[] = [
  {
    href: RouteDashboard.DASHBOARD,
    label: "Dashboard",
    icon: "LayoutDashboard",
  },
  {
    href: RouteDashboard.MESSAGE,
    label: "Message",
    icon: "MessageCircleMore",
    notification: true,
  },
  {
    href: RouteDashboard.INSIGHT,
    label: "Insight",
    icon: "ChartColumnStacked",
  },
  {
    href: RouteDashboard.TEAM,
    label: "Team",
    icon: "Users",
  },
  {
    href: RouteDashboard.SCHEDULE,
    label: "Schedule",
    icon: "CalendarDays",
  },
  {
    href: RouteDashboard.REPORT,
    label: "Report",
    icon: "ScrollText",
  },
  {
    href: RouteDashboard.SETTING,
    label: "Setting",
    icon: "Settings",
  },
]
