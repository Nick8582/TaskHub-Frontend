"use client"

import { useEffect, useState, type FC } from "react"
import { usePathname } from "next/navigation"

import { NAVIGATION_LINK } from "@/src/processes/layouts/dashboard/models/constant"
import { ThemeButton } from "@/src/processes/layouts/dashboard/ui/header/theme-button"
import { Button } from "@/src/shared/ui/button"
import { LucideIcon } from "@/src/shared/ui/icon/lucide"
import { Input } from "@/src/shared/ui/input"

export const HeaderDashboard: FC = () => {
  const router = usePathname()

  const [title, setTitle] = useState("")

  useEffect(() => {
    NAVIGATION_LINK.map(item => {
      if (item.href === router) {
        setTitle(item.label)
      }
    })
  }, [router])

  return (
    <header className="mb-3 flex items-center justify-between">
      <h1 className="text-gray-text text-4xl font-bold">{title}</h1>
      <div className="flex items-center gap-3">
        <Input
          variant="filled"
          placeholder="Search something..."
          type="search"
          iconLeft={<LucideIcon name="Search" />}
          className="w-2xs"
        />
        <Button square className="p-4">
          <LucideIcon name="Bell" size={30} />
        </Button>
        <ThemeButton />
      </div>
    </header>
  )
}
