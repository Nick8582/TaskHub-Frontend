"use client"

import { type FC } from "react"

import { LucideIcon } from "@/src/shared/ui/icon/lucide"

export const AccountDashboard: FC = () => {
  return (
    <div className="w-full">
      <p className="text-lg text-gray-400">Account</p>
      <div className="flex items-center justify-between gap-2 rounded-3xl bg-gray-100 p-1">
        <div className="h-10 w-10 rounded-full bg-purple-500"></div>
        <div className="flex-auto">
          <p className="text-lg font-bold text-black">Name</p>
          <p className="text-xs text-gray-500">Email</p>
        </div>
        <button className="text-black" onClick={() => console.log("123")}>
          <LucideIcon name={"ChevronDown"} />
        </button>
      </div>
    </div>
  )
}
