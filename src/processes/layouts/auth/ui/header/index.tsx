"use client"

import type { FC } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import LogoImage from "@/public/image/logo.png"

import { RouteHome } from "@/src/shared/constants/route.constants"
import { SITE_NAME } from "@/src/shared/constants/seo.constants"

export const HeaderAuth: FC = () => {
  const router = usePathname()

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
        <div>
          {router === RouteHome.REGISTER ? (
            <Link
              className="bg-primary-light text-hard-white border-primary-light hover:bg-primary-dark cursor-pointer rounded-2xl border-2 px-5 py-2 transition-all"
              href={RouteHome.LOGIN}
            >
              Login
            </Link>
          ) : (
            <Link
              className="border-primary-light bg-hard-white text-primary-light hover:text-hard-white hover:bg-primary-dark cursor-pointer rounded-2xl border-2 px-5 py-2 transition-all"
              href={RouteHome.REGISTER}
            >
              Register
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
