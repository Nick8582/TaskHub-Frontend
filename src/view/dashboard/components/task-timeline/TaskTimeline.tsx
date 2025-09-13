import type { FC } from 'react'
import Image from 'next/image'

import { getHours, getMinutes } from 'date-fns'

import type { TTask } from '@/types/task.types'
import { Task } from '@/ui/Task'
import { parseTime } from '@/utils/parse-time'

const HOURS = Array.from({ length: 9 }, (_, i) => i + 9)

interface TaskTimelineProps {
  tasks: TTask[]
}

export const TaskTimeline: FC<TaskTimelineProps> = ({ tasks }) => {
  const users = [
    ...new Map(
      tasks
        .flatMap(task => task.task_participants)
        .filter(u => Boolean(u.profile))
        .map(user => [user.profile.id, user.profile])
    ).values(),
  ]

  return (
    <div className='rounded-xl bg-card p-5'>
      <div className='mb-4 flex items-center justify-between'>
        <h2 className='text-xl font-medium'>Today Tasks</h2>
        <div className='flex items-center -space-x-3'>
          {users.map(user => (
            <div key={user.id}>
              <Image
                src={user.avatar_path || ''}
                alt={user.name || ''}
                width={40}
                height={40}
                className='rounded-full border border-white dark:border-neutral-800'
              />
            </div>
          ))}
        </div>
      </div>
      <div className='w-full overflow-x-auto p-3'>
        <div className='grid grid-cols-9'>
          {HOURS.map(hour => (
            <div key={hour} className='text-left text-sm font-medium opacity-50'>
              {hour > 12 ? `${hour - 12} pm` : `${hour} am`}
            </div>
          ))}
        </div>
        <div className='relative h-72'>
          {tasks.map(task => {
            if (!task.start_time || !task.end_time) {
              return null
            }

            const correctStartTime = parseTime(task.due_date, task.start_time)
            const correctEndTime = parseTime(task.due_date, task.end_time)

            const start = getHours(correctStartTime)
            const end = getHours(correctEndTime)
            const startMinutes = getMinutes(correctStartTime)
            const endMinutes = getMinutes(correctEndTime)

            const startPercent = (((start - 9) * 60 + startMinutes) / ((17 - 9) * 60)) * 100
            const endPercent = (((end - 9) * 60 + endMinutes) / ((17 - 9) * 60)) * 100

            const widthPercent = endPercent - startPercent

            return (
              <div
                key={task.id}
                className='absolute top-8'
                style={{ left: `${startPercent}%`, width: `${widthPercent}%` }}
              >
                <Task task={task} isColor isMinimal />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
