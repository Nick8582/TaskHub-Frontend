import type { FC } from 'react'
import Image from 'next/image'

import {
  Edit2,
  Image as LucideImage,
  Link as LucideLink,
  MessageSquareMore,
  Plus,
} from 'lucide-react'

import type { ITask } from '@/types/task.types'
import { ProgressBar } from '@/ui/ProgressBar'

interface TaskProps {
  task: ITask
}

export const Task: FC<TaskProps> = ({ task }) => {
  const completedCount = task.subTasks.filter(t => t.isCompleted).length
  const totalCount = task.subTasks.length
  const progress = Math.round((completedCount / totalCount) * 100)

  return (
    <div className='flex flex-col rounded-xl bg-card p-3.5'>
      <div className='mb-3 flex flex-1 items-start justify-between'>
        <div className='flex h-full items-start gap-4'>
          <div className='flex items-center justify-center rounded-full bg-primary/10 p-1.5 text-primary'>
            <task.icon />
          </div>
          <div className='flex h-full w-full flex-col'>
            <div className='flex-1 leading-tight font-medium wrap-normal opacity-90'>
              {task.title}
            </div>
            <div>
              <span className='text-sm opacity-50'>
                Due: {Math.ceil((+task.dueDate - Date.now()) / (1000 * 60 * 60 * 24))} days
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
          <button className='rounded-full bg-primary p-2 text-white transition-colors hover:bg-primary/90'>
            <Plus size={18} />
          </button>
          <button className='rounded-full border border-primary bg-white p-2 text-primary transition-colors hover:bg-primary/10'>
            <Edit2 size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
