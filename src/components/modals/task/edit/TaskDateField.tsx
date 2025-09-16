import type { FC } from 'react'

import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import type { Control } from 'react-hook-form'
import type z from 'zod'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import type { TaskSchema } from '@/zod-sсhemes/task.zod'

interface TaskDateFieldProps {
  control: Control<z.infer<typeof TaskSchema>>
}

export const TaskDateField: FC<TaskDateFieldProps> = ({ control }) => {
  return (
    <FormField
      control={control}
      name='due_date'
      render={({ field: { onChange, value } }) => (
        <FormItem className='flex flex-col'>
          <FormLabel>Due date</FormLabel>
          <FormControl>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={'outline'}
                  data-empty={!value}
                  className='w-full justify-start text-left font-normal data-[empty=true]:text-muted-foreground'
                >
                  <CalendarIcon className='mr-2 h-4 w-4' />
                  {value ? format(value, 'PPP') : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className='z-50 w-auto p-0' align='start'>
                <Calendar mode='single' selected={value} onSelect={onChange} initialFocus />
              </PopoverContent>
            </Popover>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
