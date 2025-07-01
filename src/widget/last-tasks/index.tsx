"use client"

import { useEffect, useRef, useState, type FC } from "react"

import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Swiper as SwiperType } from "swiper"

import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"

import { MockTasks } from "@/src/data/tasks.data"
import type { LastTaskFilter } from "@/src/shared/types/dashboard/filter-last-task.type"
import { Card } from "@/src/shared/ui/card"
import { DropdownButton } from "@/src/shared/ui/dropdown-button"
import { Task } from "@/src/shared/ui/task"
import { cn } from "@/src/shared/utils/cn"
import { filterTasks } from "@/src/widget/last-tasks/model/filter-task"
import { filterLastTaskData } from "@/src/widget/last-tasks/model/filter.data"

interface LastTasksProps {
  className?: string
}

export const LastTasks: FC<LastTasksProps> = ({ className }) => {
  const [selectedValue, setSelectedValue] =
    useState<LastTaskFilter["value"]>("all")
  const filteredTasks = filterTasks(MockTasks, selectedValue)
  const swiperRef = useRef<SwiperType | null>(null)
  const navigationPrevRef = useRef<HTMLButtonElement>(null)
  const navigationNextRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.navigation.update()
    }
  }, [filteredTasks])

  return (
    <div className={cn(className, "flex flex-col gap-3")}>
      <div className="flex w-full items-center justify-between">
        <h2 className="text-gray-text text-2xl font-bold">
          Last Tasks{" "}
          <span className="text-lg opacity-50">({filteredTasks.length})</span>
        </h2>

        <div className="flex items-center gap-4">
          {filteredTasks.length > 3 && (
            <div className="flex gap-2">
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
        {filteredTasks.length === 0 ? (
          <Card color="dashboard" className="col-span-3 py-6">
            <p className="text-gray-text text-center text-lg font-bold">
              No tasks match the filter
            </p>
          </Card>
        ) : (
          <Swiper
            key={selectedValue}
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
            onAfterInit={swiper => {
              swiper.navigation.init()
              swiper.navigation.update()
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
