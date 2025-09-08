import { useMemo, type FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { isToday } from 'date-fns'
import { Edit2, Image as LucideImage, Link as LucideLink, MessageSquareMore } from 'lucide-react'
import { observer } from 'mobx-react-lite'

import { CreateSubTaskModal } from '@/components/modals/task/create-sub-task'
import { Pages } from '@/shared/constants/page.constants'
import type { ITask } from '@/types/task.types'
import { ProgressBar } from '@/ui/ProgressBar'
import { ICON_MAP } from '@/utils/icon-map'

interface TaskProps {
  task: ITask
}

export const Task: FC<TaskProps> = observer(({ task }) => {
  const completedCount = task.subTasks.filter(t => t.isCompleted).length
  const totalCount = task.subTasks.length
  const progress = Math.round((completedCount / totalCount) * 100)

  const IconComponent = ICON_MAP[task.icon]

  const daysUntilDue = Math.ceil((task.dueDate.date.getTime() - Date.now()) / (1000 * 60 * 60 * 24))
  const dueText =
    daysUntilDue === 0
      ? 'Today'
      : daysUntilDue === 1
        ? 'Tomorrow'
        : daysUntilDue > 1
          ? `${daysUntilDue} days`
          : 'Overdue'

  const dueDate = useMemo(
    () =>
      isToday(task.dueDate.date)
        ? 'Today'
        : Math.ceil((task.dueDate.date.getTime() - Date.now()) / (1000 * 60 * 60 * 24)) + ' days',
    [task.dueDate.date]
  )

  return (
    <div className='flex flex-col rounded-xl bg-card p-3.5'>
      <div className='mb-3 flex flex-1 items-start justify-between'>
        <div className='flex items-start gap-4'>
          <div className='flex items-center justify-center rounded-full bg-primary/10 p-1.5 text-primary'>
            <IconComponent size={18} />
          </div>
          <div className='flex flex-col'>
            <div className='font-medium opacity-90'>{task.title}</div>
            <div>
              <span className='text-sm opacity-50'>Due: {dueDate}</span>
            </div>
          </div>
        </div>
        <div className='flex items-center -space-x-3'>
          {task.users.map(item => (
            <div key={item.id}>
              <Image
                src={item.avatarPath || ''}
                alt={item.name}
                width={36}
                height={36}
                className='rounded-full border border-white dark:border-neutral-800'
              />
            </div>
          ))}
        </div>
      </div>

      <div className='mb-4'>
        <ProgressBar progress={progress} />
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <span className='flex items-center gap-1'>
            <MessageSquareMore className='opacity-40' size={16} /> {task.comments.length}
          </span>
          <span className='flex items-center gap-1'>
            <LucideImage className='opacity-40' size={16} />
            {task.resources.length}
          </span>
          <span className='flex items-center gap-1'>
            <LucideLink className='opacity-40' size={16} />
            {task.links.length}
          </span>
        </div>
        <div className='flex items-center gap-2'>
          <CreateSubTaskModal taskId={task.id} />
          <Link
            href={Pages.TASK_EDIT(task.id)}
            className='rounded-full border border-primary bg-white p-2 text-primary transition-colors hover:bg-primary/10'
          >
            <Edit2 size={18} />
          </Link>
        </div>
      </div>
    </div>
  )
})
