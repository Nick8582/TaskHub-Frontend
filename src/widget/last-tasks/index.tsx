"use client"

import { type FC } from "react"

import { filterLastTaskData } from "@/src/shared/constants/filter-last-tasks.constants"
import { cn } from "@/src/shared/utils/cn"
import { useTasks } from "./hooks/useTasks"
import { LastTaskCards } from "./ui/cards"
import { LastTaskHeader } from "./ui/header"

interface LastTasksProps {
  className?: string
}

export const LastTasks: FC<LastTasksProps> = ({ className }) => {
  const {
    selectedValue,
    setSelectedValue,
    sortOrder,
    setSortOrder,
    isLoading,
    swiperKey,
    taskCounts,
    filteredTasks,
    navigationPrevRef,
    navigationNextRef,
    swiperRef,
  } = useTasks()

  const filterOptions = filterLastTaskData(taskCounts)

  return (
    <div className={cn(className, "flex flex-col gap-3")}>
      <LastTaskHeader
        isLoading={isLoading}
        filteredTasks={filteredTasks}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        selectedValue={selectedValue}
        filterOptions={filterOptions}
        setSelectedValue={setSelectedValue}
        navigationPrevRef={navigationPrevRef}
        navigationNextRef={navigationNextRef}
      />

      <LastTaskCards
        isLoading={isLoading}
        filteredTasks={filteredTasks}
        swiperKey={swiperKey}
        swiperRef={swiperRef}
        navigationPrevRef={navigationPrevRef}
        navigationNextRef={navigationNextRef}
      />
    </div>
  )
}
