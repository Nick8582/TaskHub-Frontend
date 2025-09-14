'use client'

import { useState, type FC } from 'react'

import { useQuery } from '@tanstack/react-query'

import { SkeletonLoader } from '@/components/ui/skeleton-loader'
import { getClientTasks } from '@/services/tasks/task-client.service'
import type { TTaskSortBy, TTaskStatus } from '@/types/task.types'
import { Task } from '@/ui/Task'
import { LastTasksFilter } from '@/view/dashboard/components/last-tasks/LastTasksFilter'
import { LastTasksSort } from '@/view/dashboard/components/last-tasks/LastTasksSort'

interface LastTasksProps {
  tasks: Awaited<ReturnType<typeof getClientTasks>>
}

export const LastTasks: FC<LastTasksProps> = ({ tasks }) => {
  const [status, setStatus] = useState<TTaskStatus | undefined>(undefined)
  const [sort, setSort] = useState<TTaskSortBy>('asc')

  const { data, isPending } = useQuery({
    queryKey: ['last-tasks', status, sort],
    queryFn: () => getClientTasks({ status, sortByDueDate: sort }),
    initialData: tasks,
  })

  return (
    <div className='mb-6'>
      <div className='mb-5 flex items-center justify-between'>
        <h2 className='text-xl font-medium'>
          Last Tasks <span className='text-lg font-normal opacity-40'>({data.length})</span>
        </h2>
        <div className='flex items-center gap-2'>
          <LastTasksFilter status={status} setStatus={setStatus} />
          <LastTasksSort sort={sort} setSort={setSort} />
        </div>
      </div>
      {isPending ? (
        <div className='grid grid-cols-3 gap-6'>
          <SkeletonLoader count={3} />
        </div>
      ) : data.length ? (
        <div className='grid grid-cols-3 gap-6'>
          {data.map(item => (
            <Task task={item} key={item.id} />
          ))}
        </div>
      ) : (
        <div>
          <p className='text-center opacity-50'>No tasks available</p>
        </div>
      )}
    </div>
  )
}
