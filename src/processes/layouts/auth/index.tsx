import { type FC } from "react"

import { HeaderAuth } from "@/src/processes/layouts/auth/ui/header"
import { type LayoutProps } from "@/src/shared/types/layout.type"

export const AuthLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-dvh w-full flex-col">
      <HeaderAuth />
      <main className="flex flex-auto flex-col">{children}</main>
    </div>
  )
}
