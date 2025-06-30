"use client"

import { useEffect, useState, type FC } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { NAVIGATION_LINK } from "@/src/processes/layouts/dashboard/models/constant"
import { LucideIcon } from "@/src/shared/ui/icon/lucide"
import { cn } from "@/src/shared/utils/cn"

export const NavigationDashboard: FC = () => {
  const router = usePathname()

  const [messages, setMessages] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setMessages(4)
    }, 1000)
  }, [])

  return (
    <nav className="w-full">
      <p className="text-gray-text mb-2 text-lg">Main menu</p>
      <ul className="flex flex-col gap-1">
        {NAVIGATION_LINK.map((item, index) => {
          return (
            <li key={index}>
              <Link
                href={item.href}
                className={cn(
                  "text-gray-text hover:bg-primary-light/20 flex items-center gap-2 rounded-3xl p-3 transition-all",
                  router === item.href &&
                    "bg-primary hover:bg-primary-dark rounded-3xl text-white"
                )}
              >
                <LucideIcon name={item.icon} />
                <span className="flex-auto">{item.label}</span>
                {item?.notification && (
                  <span
                    className={cn(
                      "bg-primary-light text-gray-dashboard rounded-3xl px-2 text-xs",
                      router === item.href &&
                        "bg-gray-dashboard text-primary-light rounded-3xl"
                    )}
                  >
                    {messages}
                  </span>
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
