import { type FC, type RefObject } from "react"

import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"

import type { Swiper as SwiperType } from "swiper"

import type { ITask } from "@/src/shared/types/task.types"
import { Card } from "@/src/shared/ui/card"
import { Task } from "@/src/widget/last-tasks/ui"
import { TaskSkeleton } from "@/src/widget/last-tasks/ui/skeleton"

interface LastTaskCardsProps {
  isLoading: boolean
  filteredTasks: ITask[]
  swiperKey: number
  swiperRef: RefObject<SwiperType | null>
  navigationPrevRef: RefObject<HTMLButtonElement | null>
  navigationNextRef: RefObject<HTMLButtonElement | null>
}

export const LastTaskCards: FC<LastTaskCardsProps> = ({
  isLoading,
  filteredTasks,
  swiperKey,
  swiperRef,
  navigationPrevRef,
  navigationNextRef,
}) => {
  return (
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
  )
}
