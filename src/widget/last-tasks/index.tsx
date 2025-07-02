"use client"

import { useEffect, useRef, useState, type FC } from "react"

import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react"

import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"

import type { Swiper as SwiperType } from "swiper"

import { MockTasks } from "@/src/data/tasks.data"
import type { LastTaskFilter } from "@/src/shared/types/dashboard/filter-last-task.type"
import { Button } from "@/src/shared/ui/button"
import { Card } from "@/src/shared/ui/card"
import { DropdownButton } from "@/src/shared/ui/dropdown-button"
import { Task } from "@/src/shared/ui/task"
import { TaskSkeleton } from "@/src/shared/ui/task/skeleton"
import { cn } from "@/src/shared/utils/cn"
import { filterTasks } from "@/src/widget/last-tasks/model/filter-task"
import { filterLastTaskData } from "@/src/widget/last-tasks/model/filter.data"

interface LastTasksProps {
  className?: string
}

export const LastTasks: FC<LastTasksProps> = ({ className }) => {
  const [selectedValue, setSelectedValue] =
    useState<LastTaskFilter["value"]>("all")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")
  const [isLoading, setIsLoading] = useState(true)
  const filteredTasks = filterTasks(MockTasks, selectedValue, sortOrder)
  const [swiperKey, setSwiperKey] = useState(0)

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
      <div className="flex w-full items-center justify-between">
        <h2 className="text-gray-text text-2xl font-bold">
          Last Tasks{" "}
          <span className="text-lg opacity-50">({filteredTasks.length})</span>
        </h2>

        <div className="flex items-center gap-4">
          {filteredTasks.length > 3 && (
            <div className={cn("flex gap-2", isLoading && "hidden")}>
              <button
                ref={navigationPrevRef}
                className="bg-gray-dashboard hover:bg-gray-dashboard/80 cursor-pointer rounded-full p-1 shadow-md transition-colors disabled:cursor-default disabled:opacity-50"
                aria-label="Previous tasks"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                ref={navigationNextRef}
                className="bg-gray-dashboard hover:bg-gray-dashboard/80 cursor-pointer rounded-full p-1 shadow-md transition-colors disabled:cursor-default disabled:opacity-50"
                aria-label="Next tasks"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
          <Button
            onClick={() =>
              setSortOrder(prev => (prev === "asc" ? "desc" : "asc"))
            }
            className="flex items-center gap-2 px-2 py-1"
          >
            {sortOrder === "asc" ? <ChevronDown /> : <ChevronUp />}
            By deadline
          </Button>

          <DropdownButton
            value={selectedValue}
            options={filterLastTaskData.map(f => ({
              value: f.value,
              label: f.label,
            }))}
            onSelect={setSelectedValue}
            activeOptionClassName="bg-primary text-white"
          />
        </div>
      </div>

      <div className="relative">
        {isLoading ? (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, index) => (
              <TaskSkeleton key={`skeleton-${index}`} />
            ))}
          </div>
        ) : filteredTasks.length === 0 ? (
          <Card color="dashboard" className="col-span-3 py-6">
            <p className="text-gray-text text-center text-lg font-bold">
              No tasks match the filter
            </p>
          </Card>
        ) : (
          <Swiper
            key={`swiper-${swiperKey}`}
            modules={[Navigation]}
            spaceBetween={12}
            slidesPerView={3}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
              disabledClass: "opacity-50 cursor-default",
            }}
            onSwiper={swiper => {
              swiperRef.current = swiper
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3 },
            }}
            style={{ padding: "4px 0" }}
          >
            {filteredTasks.map(task => (
              <SwiperSlide key={task.id} style={{ height: "auto" }}>
                <div className="h-full">
                  <Task task={task} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  )
}
