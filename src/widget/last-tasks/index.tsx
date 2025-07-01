"use client"

import { useState, type FC } from "react"

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

  return (
    <div className={cn(className, "flex flex-col gap-3")}>
      <div className="flex items-center justify-between">
        <h2 className="text-gray-text text-2xl font-bold">
          Last Tasks{" "}
          <span className="text-lg opacity-50">({filteredTasks.length})</span>
        </h2>
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
      <div className="grid grid-cols-3 gap-3">
        {filteredTasks.length ? (
          filteredTasks.map(task => <Task task={task} key={task.id} />)
        ) : (
          <Card color="dashboard" className="col-span-3 py-6">
            <p className="text-gray-text text-center text-lg font-bold">
              No tasks match the filter
            </p>
          </Card>
        )}
      </div>
    </div>
  )
}
