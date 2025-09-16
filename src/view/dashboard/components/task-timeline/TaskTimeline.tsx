import type { FC } from 'react'
import Image from 'next/image'

import type { TTask } from '@/types/task.types'
import { cn } from '@/utils'
import {
  currentHour,
  currentTimeLinePercent,
} from '@/view/dashboard/components/task-timeline/current-time-line'
import TimelineCard from '@/view/dashboard/components/task-timeline/TImelineCard'

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
            <div
              key={hour}
              className={cn(
                'text-left text-sm font-medium opacity-35',
                hour === currentHour ? 'text-primary opacity-80' : ''
              )}
            >
              {hour > 12 ? `${hour - 12} pm` : `${hour} am`}
            </div>
          ))}
        </div>
        <div className='relative h-72'>
          <div
            className='absolute top-2 bottom-0 w-0.5 bg-primary/50'
            style={{ left: currentTimeLinePercent + '% ' }}
          />
          {tasks.map(task => {
            return <TimelineCard key={task.id} task={task} />
          })}
        </div>
      </div>
    </div>
  )
}
