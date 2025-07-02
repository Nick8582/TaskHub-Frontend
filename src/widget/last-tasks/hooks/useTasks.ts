import { useEffect, useRef, useState } from "react"

import type { Swiper as SwiperType } from "swiper"

import { MockTasks } from "@/src/data/tasks.data"
import {
  filterTasks,
  getTaskCounts,
} from "@/src/widget/last-tasks/model/filter-task"

export const useTasks = () => {
  const [selectedValue, setSelectedValue] = useState<
    "all" | "completed" | "incomplete" | "partial"
  >("all")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "">("")
  const [isLoading, setIsLoading] = useState(true)
  const [swiperKey, setSwiperKey] = useState(0)

  const navigationPrevRef = useRef<HTMLButtonElement>(null)
  const navigationNextRef = useRef<HTMLButtonElement>(null)
  const swiperRef = useRef<SwiperType | null>(null)

  const taskCounts = getTaskCounts(MockTasks)
  const filteredTasks = filterTasks(MockTasks, selectedValue, sortOrder)

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

  return {
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
  }
}
