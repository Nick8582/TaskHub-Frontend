import { type FC } from "react"

import { type LayoutProps } from "@/src/shared/types/layout.type"

export const AuthLayout: FC<LayoutProps> = ({ children }) => {
  return <>{children}</>
}
