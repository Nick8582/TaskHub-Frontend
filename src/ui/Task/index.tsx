import { useMemo, type FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { format, isToday } from 'date-fns'
import { Edit2, Image as LucideImage, Link as LucideLink, MessageSquareMore } from 'lucide-react'
import { observer } from 'mobx-react-lite'

import { CreateSubTaskModal } from '@/components/modals/task/create-sub-task'
import { DashboardPages } from '@/shared/constants/dashboard-pages.constants'
import type { ITask } from '@/types/task.types'
import { ProgressBar } from '@/ui/ProgressBar'
import { cn } from '@/utils'
import { ICON_MAP } from '@/utils/icon-map'

interface TaskProps {
  task: ITask
  isColor?: boolean
  isMinimal?: boolean
}

export const Task: FC<TaskProps> = observer(({ task, isColor, isMinimal }) => {
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
    <div
      className={cn(
        'flex flex-col rounded-xl bg-card p-3.5',
        isColor && task.color,
        isColor && 'text-foreground'
      )}
    >
      <div
        className={cn(
          'mb-3 flex flex-1 items-start justify-between',
          isMinimal && 'mb-0 flex-col gap-3'
        )}
      >
        <div className='flex items-start gap-4'>
          <div
            className={cn(
              'flex items-center justify-center rounded-full bg-primary/10 p-1.5 text-primary',
              isColor && 'bg-card text-primary'
            )}
          >
            <IconComponent size={18} />
          </div>
          <div className='flex flex-col'>
            <div className={'leading-tight font-medium wrap-normal opacity-90'}>{task.title}</div>
            <div>
              <span className={cn('text-sm opacity-50', isColor && 'opacity-75')}>
                {isMinimal ? (
                  <>
                    {format(task.dueDate.startTime!, 'ha')} - {format(task.dueDate.endTime!, 'ha')}
                  </>
                ) : (
                  <>Due: {dueDate}</>
                )}
              </span>
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

      {!isMinimal && (
        <div className='mb-4'>
          <ProgressBar progress={progress} />
        </div>
      )}
      {!isMinimal && (
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <span className='flex items-center gap-1'>
              <MessageSquareMore className={isColor ? 'opacity-80' : 'opacity-40'} size={16} />{' '}
              {task.comments.length}
            </span>
            <span className='flex items-center gap-1'>
              <LucideImage className={isColor ? 'opacity-80' : 'opacity-40'} size={16} />
              {task.resources.length}
            </span>
            <span className='flex items-center gap-1'>
              <LucideLink className={isColor ? 'opacity-80' : 'opacity-40'} size={16} />
              {task.links.length}
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <CreateSubTaskModal taskId={task.id} />
            <Link
              href={DashboardPages.TASK_EDIT(task.id)}
              className='rounded-full border border-primary bg-card p-2 text-primary transition-colors hover:bg-primary/10'
            >
              <Edit2 size={18} />
            </Link>
          </div>
        </div>
      )}
    </div>
  )
})
