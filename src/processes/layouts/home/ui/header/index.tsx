import type { FC } from "react"
import Image from "next/image"
import Link from "next/link"

import LogoImage from "@/public/image/logo.png"

import { HeaderHomeButtons } from "@/src/processes/layouts/home/ui/header/buttons"
import { RouteHome } from "@/src/shared/constants/route.constants"
import { SITE_NAME } from "@/src/shared/constants/seo.constants"

export const HeaderHome: FC = () => {
  return (
    <header className="bg-gray-sidebar">
      <div className="container mx-auto flex w-full items-center justify-between py-3">
        <Link
          href={RouteHome.HOME}
          className="text-gray-text flex items-center gap-2 text-3xl font-bold"
        >
          <Image
            src={LogoImage}
            alt="Logo"
            priority
            className="block w-full max-w-12 object-contain"
          />
          {SITE_NAME}
        </Link>

        <HeaderHomeButtons />
      </div>
    </header>
  )
}
