"use client"

import { useRef, useState, type FC } from "react"
import Image from "next/image"
import Link from "next/link"

import { MockProfile } from "@/src/data/profile.data"
import { ACCOUNT_LINK } from "@/src/processes/layouts/dashboard/models/constant"
import { useClickOutside } from "@/src/shared/hooks/use-click-outside"
import { Button } from "@/src/shared/ui/button"
import { LucideIcon } from "@/src/shared/ui/icon/lucide"
import { cn } from "@/src/shared/utils/cn"

export const AccountDashboard: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const listRef = useRef<HTMLUListElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useClickOutside(listRef, () => setIsOpen(false), [buttonRef])

  const closeMenu = () => {
    setIsOpen(false)
  }

  const handleLogout = () => {
    console.log("User logged out")
    closeMenu()
  }

  return (
    <div className="w-full">
      <p className="text-gray-text mb-2 text-lg">Account</p>
      <div className="relative">
        <div className="bg-gray-sidebar flex items-center justify-between gap-2 rounded-3xl p-1">
          <div className="bg-primary h-10 w-10 flex-shrink-0 rounded-full">
            {MockProfile.avatar && (
              <Image
                className="h-full w-full rounded-full object-cover"
                width={40}
                height={40}
                src={MockProfile.avatar}
                alt={`${MockProfile.name}'s avatar`}
              />
            )}
          </div>
          <div className="flex-auto overflow-hidden">
            <p className="text-gray-text truncate text-lg font-bold">
              {MockProfile.name}
            </p>
            <p className="text-gray-text truncate text-xs">
              {MockProfile.email}
            </p>
          </div>
          <button
            ref={buttonRef}
            type="button"
            className="text-gray-text flex-shrink-0 cursor-pointer p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-haspopup="menu"
            aria-expanded={isOpen}
            aria-label="Account menu"
          >
            <LucideIcon
              name={"ChevronDown"}
              className={cn(
                "transition-transform duration-200",
                isOpen && "rotate-180"
              )}
            />
          </button>
        </div>

        {isOpen && (
          <ul
            ref={listRef}
            onClick={closeMenu}
            className={cn(
              "border-gray-border bg-gray-sidebar absolute right-0 top-full z-10 mt-1 flex w-full flex-col rounded-2xl border px-1 py-2 shadow-lg"
            )}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby={buttonRef.current?.id}
          >
            {ACCOUNT_LINK.map(option => (
              <li key={option.href} role="presentation">
                <Link
                  href={option.href}
                  className="hover:bg-gray-hover flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm transition-colors"
                  role="menuitem"
                >
                  <LucideIcon name={option.icon} size={16} />
                  {option.label}
                </Link>
              </li>
            ))}
            <li
              role="presentation"
              className="border-gray-border mt-1 border-t pt-1"
            >
              <Button
                onClick={handleLogout}
                className="text-status-overdue hover:bg-gray-hover flex w-full items-center gap-2 rounded-xl bg-transparent px-3 py-2 text-left text-sm transition-colors"
              >
                <LucideIcon name={"LogOut"} size={16} />
                Log out
              </Button>
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}
