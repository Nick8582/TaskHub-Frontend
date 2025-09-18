'use client'

import { useState, type FC } from 'react'

import { useQuery } from '@tanstack/react-query'

import { TaskList } from '@/components/elements/TaskList'
import { getClientTasks } from '@/services/tasks/task-client.service'
import type { TClientTaskResponse, TTaskSortBy, TTaskStatus } from '@/types/task.types'
import { LastTasksFilter } from '@/view/dashboard/components/last-tasks/LastTasksFilter'
import { LastTasksSort } from '@/view/dashboard/components/last-tasks/LastTasksSort'

interface LastTasksProps {
  tasks: TClientTaskResponse
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
      <TaskList isPending={isPending} data={data} />
    </div>
  )
}
