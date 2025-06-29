import { type FC } from "react"

import { HeaderHome } from "@/src/processes/layouts/home/ui/header"
import { type LayoutProps } from "@/src/shared/types/layout.type"

export const HomeLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-dvh w-full flex-col">
      <HeaderHome />
      <main className="bg-gray-dashboard">{children}</main>
    </div>
  )
}
