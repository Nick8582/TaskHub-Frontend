import type { FC } from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import type { TTaskStatus } from '@/types/task.types'
import { cn } from '@/utils'

const statuses: Array<TTaskStatus | 'all'> = ['all', 'not-started', 'in-progress', 'completed']

interface LastTasksFilterProps {
  status: TTaskStatus | undefined
  setStatus: (status: TTaskStatus | undefined) => void
}

export const LastTasksFilter: FC<LastTasksFilterProps> = ({ status, setStatus }) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={'outline'} className='capitalize'>
            {status ? status.replace('-', ' ') : 'All'}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          {statuses.map(item => (
            <DropdownMenuItem
              key={item}
              onClick={() => setStatus(item === 'all' ? undefined : item)}
              className={cn(status === item ? 'font-bold' : '', 'cursor-pointer capitalize')}
            >
              {item.replace('-', ' ')}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
