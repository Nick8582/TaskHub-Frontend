"use client"

import type { FC } from "react"

import { Heading } from "@/ui/Heading"
import { SearchField } from "@/ui/SearchField"

export const DashboardPage: FC = () => {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <Heading>Dashboard</Heading>
        <SearchField value="" onChange={() => {}} />
      </div>
    </div>
  )
}
