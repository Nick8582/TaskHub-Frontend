"use client"

import type { FC } from "react"

import { Heading } from "@/ui/Heading"
import { SearchField } from "@/ui/SearchField"
import { ProjectStats } from "@/view/dashboard/components/ProjectStats"

export const DashboardPage: FC = () => {
  return (
    <div className="grid grid-cols-[2.7fr_1fr] gap-6">
      <div>
        <div className="mb-6 flex items-center justify-between">
          <Heading>Dashboard</Heading>
          <SearchField value="" onChange={() => {}} />
        </div>
        <div className="grid grid-cols-[25%_75%] gap-6">
          <ProjectStats />
          <div>CHART</div>
        </div>
      </div>
      <div className="flex h-screen items-center justify-center p-5">CHAT</div>
    </div>
  )
}
