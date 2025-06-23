import { FC } from "react"

import { LayoutProps } from "@/src/shared/types/layout-type"

export const AuthLayout: FC<LayoutProps> = ({ children }) => {
  return <>{children}</>
}
