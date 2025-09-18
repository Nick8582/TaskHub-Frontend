import type { FC } from 'react'

import { SkeletonLoader } from '@/components/ui/skeleton-loader'
import type { TClientTaskResponse } from '@/types/task.types'
import { Task } from '@/ui/Task'

interface TaskListProps {
  isPending?: boolean
  data: TClientTaskResponse
}

export const TaskList: FC<TaskListProps> = ({ isPending, data }) => {
  return isPending ? (
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
  )
}
