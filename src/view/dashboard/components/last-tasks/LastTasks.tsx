import { useMemo, useState, type FC } from 'react'

import type { TTaskSortBy, TTaskStatus } from '@/types/task.types'
import { Task } from '@/ui/Task'
import { LastTasksFilter } from '@/view/dashboard/components/last-tasks/LastTasksFilter'
import { LastTasksSort } from '@/view/dashboard/components/last-tasks/LastTasksSort'
import { LAST_TASKS } from '@/view/dashboard/data/last-tasks.data'

export const LastTasks: FC = () => {
  const [status, setStatus] = useState<TTaskStatus | null>(null)
  const [sortByDueDate, setSortByDueDate] = useState<TTaskSortBy>('asc')

  const filteredTasks = useMemo(() => {
    const filtered = !status
      ? LAST_TASKS
      : LAST_TASKS.filter(task => {
          switch (status) {
            case 'not-started':
              return task.subTasks.every(subTask => !subTask.isCompleted)
            case 'in-progress':
              return task.subTasks.some(subTask => !subTask.isCompleted)
            case 'completed':
              return task.subTasks.every(subTask => subTask.isCompleted)
            default:
              return true
          }
        })

    const sortedTask = filtered.sort((a, b) => {
      const dateA = new Date(a.dueDate).getTime()
      const dateB = new Date(b.dueDate).getTime()

      if (sortByDueDate === 'asc') {
        return dateA - dateB
      } else {
        return dateB - dateA
      }
    })

    return sortedTask
  }, [status, sortByDueDate])

  return (
    <div>
      <div className='mb-5 flex items-center justify-between'>
        <h2 className='text-xl font-medium'>
          Last Tasks{' '}
          <span className='text-lg font-normal opacity-40'>({filteredTasks.length})</span>
        </h2>
        <div className='flex items-center gap-2'>
          <LastTasksFilter setStatus={setStatus} status={status} />
          <LastTasksSort sortByDueDate={sortByDueDate} setSortByDueDate={setSortByDueDate} />
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
}
