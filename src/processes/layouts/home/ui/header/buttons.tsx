"use client"

import type { FC } from "react"
import Link from "next/link"

import { RouteHome } from "@/src/shared/constants/route.constants"

export const HeaderHomeButtons: FC = () => {
  return (
    <div className="flex gap-2">
      <Link
        className="border-primary-light bg-hard-white text-primary-light hover:text-hard-white hover:bg-primary-dark cursor-pointer rounded-2xl border-2 px-5 py-2 transition-all"
        href={RouteHome.REGISTER}
      >
        Register
      </Link>
      <Link
        className="bg-primary-light text-hard-white border-primary-light hover:bg-primary-dark cursor-pointer rounded-2xl border-2 px-5 py-2 transition-all"
        href={RouteHome.LOGIN}
      >
        Login
      </Link>
    </div>
  )
}
