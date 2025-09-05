import type { FC } from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { TTaskSortBy } from '@/types/task.types'

interface LastTasksSortProps {
  sortByDueDate: TTaskSortBy
  setSortByDueDate: (value: TTaskSortBy) => void
}

const sortTypes: Array<TTaskSortBy> = ['asc', 'desc']

export const LastTasksSort: FC<LastTasksSortProps> = ({ sortByDueDate, setSortByDueDate }) => {
  return (
    <div>
      <Select defaultValue={sortByDueDate} onValueChange={setSortByDueDate}>
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Sort by due date' />
        </SelectTrigger>
        <SelectContent>
          {sortTypes.map(type => (
            <SelectItem key={type} value={type}>
              {type === 'asc' ? 'Ascending' : 'Descending'}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
