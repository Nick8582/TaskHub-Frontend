import { type FC } from 'react'

import { observer } from 'mobx-react-lite'

import { taskStore } from '@/stores/task.store'
import { Task } from '@/ui/Task'
import { LastTasksFilter } from '@/view/dashboard/components/last-tasks/LastTasksFilter'
import { LastTasksSort } from '@/view/dashboard/components/last-tasks/LastTasksSort'

export const LastTasks: FC = observer(() => {
  const filteredTasks = taskStore.filteredTasks

  return (
    <div className='mb-6'>
      <div className='mb-5 flex items-center justify-between'>
        <h2 className='text-xl font-medium'>
          Last Tasks{' '}
          <span className='text-lg font-normal opacity-40'>({filteredTasks.length})</span>
        </h2>
        <div className='flex items-center gap-2'>
          <LastTasksFilter />
          <LastTasksSort />
        </div>
      </div>
      {filteredTasks.length ? (
        <div className='grid grid-cols-3 gap-6'>
          {filteredTasks.map(item => (
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
})
