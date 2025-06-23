export const RouteDashboard = {
  DASHBOARD: "/dashboard",
  MESSAGE: "/message",
  INSIGHT: "/insight",
  TEAM: "/team",
  SCHEDULE: "/schedule",
  REPORT: "/report",
  SETTING: "/setting",
} as const

export type RouteDashboard =
  (typeof RouteDashboard)[keyof typeof RouteDashboard]
