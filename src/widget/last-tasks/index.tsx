"use client"

import { useEffect, useRef, useState, type FC } from "react"

import "swiper/css"
import "swiper/css/navigation"

import type { Swiper as SwiperType } from "swiper"

import { MockTasks } from "@/src/data/tasks.data"
import { filterLastTaskData } from "@/src/shared/constants/filter-last-tasks.constants"
import type { LastTaskFilter } from "@/src/shared/types/dashboard/filter-last-task.type"
import { cn } from "@/src/shared/utils/cn"
import {
  filterTasks,
  getTaskCounts,
} from "@/src/widget/last-tasks/model/filter-task"
import { LastTaskCards } from "@/src/widget/last-tasks/ui/cards"
import { LastTaskHeader } from "@/src/widget/last-tasks/ui/header"

interface LastTasksProps {
  className?: string
}

export const LastTasks: FC<LastTasksProps> = ({ className }) => {
  const [selectedValue, setSelectedValue] =
    useState<LastTaskFilter["value"]>("all")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
  const [isLoading, setIsLoading] = useState(true)
  const [swiperKey, setSwiperKey] = useState(0)

  const filteredTasks = filterTasks(MockTasks, selectedValue, sortOrder)
  const taskCounts = getTaskCounts(MockTasks)
  const filterOptions = filterLastTaskData(taskCounts)

  const navigationPrevRef = useRef<HTMLButtonElement>(null)
  const navigationNextRef = useRef<HTMLButtonElement>(null)
  const swiperRef = useRef<SwiperType | null>(null)

  useEffect(() => {
    setSwiperKey(prev => prev + 1)
  }, [selectedValue, sortOrder])

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.navigation.init()
      swiperRef.current.navigation.update()
    }
  }, [swiperKey])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={cn(className, "flex flex-col gap-3")}>
      <LastTaskHeader
        isLoading={isLoading}
        filteredTasks={filteredTasks}
        navigationPrevRef={navigationPrevRef}
        navigationNextRef={navigationNextRef}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        selectedValue={selectedValue}
        filterOptions={filterOptions}
        setSelectedValue={setSelectedValue}
      />

      <LastTaskCards
        isLoading={isLoading}
        filteredTasks={filteredTasks}
        navigationPrevRef={navigationPrevRef}
        navigationNextRef={navigationNextRef}
        swiperKey={swiperKey}
        swiperRef={swiperRef}
      />
    </div>
  )
}
