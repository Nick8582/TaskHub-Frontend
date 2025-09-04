import type { FC } from 'react'

import { Task } from '@/ui/Task'
import { LAST_TASKS } from '@/view/dashboard/data/last-tasks.data'

export const LastTasks: FC = () => {
  return (
    <div>
      <h2 className='mb-2 text-xl font-medium'>
        Last Tasks <span className='font-normal opacity-50'>({LAST_TASKS.length})</span>
      </h2>
      {LAST_TASKS.length ? (
        <div className='grid grid-cols-3 gap-4'>
          {LAST_TASKS.map(item => (
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
