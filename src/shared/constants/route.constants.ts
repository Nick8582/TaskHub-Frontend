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

export const RouteHome = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
} as const

export type RouteHome = (typeof RouteHome)[keyof typeof RouteHome]
