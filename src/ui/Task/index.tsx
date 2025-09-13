import { useMemo, type FC } from 'react'
import Link from 'next/link'

import { format, isToday } from 'date-fns'
import { Edit2, Image as LucideImage, Link as LucideLink, MessageSquareMore } from 'lucide-react'

import { CreateSubTaskModal } from '@/components/modals/task/create-sub-task'
import { DashboardPages } from '@/shared/constants/dashboard-pages.constants'
import type { TTask } from '@/types/task.types'
import { ProgressBar } from '@/ui/ProgressBar'
import { cn } from '@/utils'
import { ICON_MAP } from '@/utils/icon-map'

interface TaskProps {
  task: TTask
  isColor?: boolean
  isMinimal?: boolean
}

export const Task: FC<TaskProps> = ({ task, isColor, isMinimal }) => {
  const completedCount = task?.sub_task?.filter(t => t.is_completed).length || 0
  const totalCount = task?.sub_task?.length || 0
  const progress = Math.round((completedCount / totalCount) * 100)

  const IconComponent = ICON_MAP[task.icon as keyof typeof ICON_MAP]

  const correctDay = new Date(task.due_date)

  const dueDate = useMemo(
    () =>
      isToday(correctDay)
        ? 'Today'
        : Math.ceil((+correctDay - Date.now()) / (1000 * 60 * 60 * 24)) + ' days',
    [correctDay]
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
                    {format(task.start_time!, 'ha')} - {format(task.end_time!, 'ha')}
                  </>
                ) : (
                  <>Due: {dueDate}</>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className='flex items-center -space-x-3'>
          {/* {task.users.map(item => (
            <div key={item.id}>
              <Image
                src={item.avatarPath || ''}
                alt={item.name}
                width={36}
                height={36}
                className='rounded-full border border-white dark:border-neutral-800'
              />
            </div>
          ))} */}
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
              {/* {task.comments.length} */}3
            </span>
            <span className='flex items-center gap-1'>
              <LucideImage className={isColor ? 'opacity-80' : 'opacity-40'} size={16} />
              {/* {task.resources.length} */}6
            </span>
            <span className='flex items-center gap-1'>
              <LucideLink className={isColor ? 'opacity-80' : 'opacity-40'} size={16} />
              {/* {task.links.length} */}2
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
}
