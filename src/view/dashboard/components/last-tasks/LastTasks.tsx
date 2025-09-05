import { useMemo, useState, type FC } from 'react'

import type { TTaskStatus } from '@/types/task.types'
import { Task } from '@/ui/Task'
import { LastTasksFilter } from '@/view/dashboard/components/last-tasks/LastTasksFilter'
import { LAST_TASKS } from '@/view/dashboard/data/last-tasks.data'

export const LastTasks: FC = () => {
  const [status, setStatus] = useState<TTaskStatus | null>(null)

  const filteredTasks = useMemo(() => {
    if (!status) return LAST_TASKS

    switch (status) {
      case 'not-started':
        return LAST_TASKS.filter(task => task.subTasks.every(subTask => !subTask.isCompleted))
      case 'in-progress':
        return LAST_TASKS.filter(task => task.subTasks.some(subTask => !subTask.isCompleted))
      case 'completed':
        return LAST_TASKS.filter(task => task.subTasks.every(subTask => subTask.isCompleted))
      default:
        return LAST_TASKS
    }
  }, [status])

  return (
    <div>
      <div className='mb-5 flex items-center justify-between'>
        <h2 className='text-xl font-medium'>
          Last Tasks{' '}
          <span className='text-lg font-normal opacity-40'>({filteredTasks.length})</span>
        </h2>
        <LastTasksFilter setStatus={setStatus} status={status} />
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
}
