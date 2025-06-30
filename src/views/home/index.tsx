import type { FC } from "react"
import Link from "next/link"

import { RouteHome } from "@/src/shared/constants/route.constants"
import { SITE_NAME } from "@/src/shared/constants/seo.constants"

export const HomePage: FC = () => {
  return (
    <section className="container mx-auto flex flex-auto flex-col justify-center gap-2">
      <h1 className="from-primary-light to-primary-dark bg-gradient-to-r bg-[length:200%_auto] bg-clip-text text-center text-6xl font-bold text-transparent">
        {SITE_NAME}
      </h1>
      <p className="text-center text-xl font-medium">
        Track projects, tasks, and team performance with our intuitive
        dashboard. Manage workflows efficiently.
      </p>
      <div className="flex justify-center gap-2">
        <Link
          className="text-hard-white bg-primary border-primary hover:bg-primary-dark/60 rounded-2xl border px-4 py-2 transition-all"
          href={RouteHome.LOGIN}
        >
          Login
        </Link>
        <Link
          className="text-hard-white bg-primary border-primary hover:bg-primary-light/70 rounded-2xl border px-4 py-2"
          href={RouteHome.REGISTER}
        >
          Register
        </Link>
      </div>
    </section>
  )
}
