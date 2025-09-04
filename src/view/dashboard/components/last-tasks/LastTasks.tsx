import type { FC } from 'react'

import { Task } from '@/ui/Task'
import { LAST_TASKS } from '@/view/dashboard/data/last-tasks.data'

export const LastTasks: FC = () => {
  return (
    <div>
      <h2 className='mb-5 text-xl font-medium'>
        Last Tasks <span className='text-lg font-normal opacity-40'>({LAST_TASKS.length})</span>
      </h2>
      {LAST_TASKS.length ? (
        <div className='grid grid-cols-3 gap-6'>
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
