"use client"

import { type FC } from "react"
import Image from "next/image"

import { MockProfile } from "@/src/data/profile.data"
import { LucideIcon } from "@/src/shared/ui/icon/lucide"

export const AccountDashboard: FC = () => {
  return (
    <div className="w-full">
      <p className="text-gray-text text-lg">Account</p>
      <div className="bg-gray-sidebar flex items-center justify-between gap-2 rounded-3xl p-1">
        <div className="bg-primary h-10 w-10 rounded-full">
          {MockProfile.avatar && (
            <Image
              className="h-full w-full rounded-full object-contain"
              width={40}
              height={40}
              src={MockProfile.avatar}
              alt=""
            />
          )}
        </div>
        <div className="flex-auto">
          <p className="text-gray-text text-lg font-bold">{MockProfile.name}</p>
          <p className="text-gray-text text-xs">{MockProfile.email}</p>
        </div>
        <button
          className="text-gray-text cursor-pointer"
          onClick={() => console.log("123")}
        >
          <LucideIcon name={"ChevronDown"} />
        </button>
      </div>
    </div>
  )
}
