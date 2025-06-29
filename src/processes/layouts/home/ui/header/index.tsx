import type { FC } from "react"
import Link from "next/link"

import { RouteHome } from "@/src/shared/constants/route.constants"
import { SITE_NAME } from "@/src/shared/constants/seo.constants"

export const HeaderHome: FC = () => {
  return (
    <header className="bg-gray-sidebar">
      <div className="container mx-auto w-full py-3">
        <Link
          href={RouteHome.HOME}
          className="text-gray-text text-3xl font-bold"
        >
          {SITE_NAME}
        </Link>
      </div>
    </header>
  )
}
