'use client'

import { useEffect, type FC } from 'react'
import { useRouter } from 'next/navigation'

import { zodResolver } from '@hookform/resolvers/zod'
import * as Popover from '@radix-ui/react-popover'
import { format } from 'date-fns'
import { CalendarIcon, X } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import type { TTaskFormData } from '@/types/task.types'
import { ICON_MAP, ICON_NAMES } from '@/utils/icon-map'
import { LAST_TASKS } from '@/view/dashboard/data/last-tasks.data'
import { TaskSchema } from '@/zod-sсhems/task.zod'

interface TaskEditModalClientProps {
  id: string
}

export const TaskEditModalClient: FC<TaskEditModalClientProps> = ({ id }) => {
  const router = useRouter()

  const closeModal = () => {
    router.back()
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  const form = useForm<TTaskFormData>({
    resolver: zodResolver(TaskSchema),
    defaultValues: {
      title: '',
      dueDate: undefined,
      icon: undefined,
    },
  })

  useEffect(() => {
    const task = LAST_TASKS.find(task => task.id === id)
    if (task) {
      form.reset(task)
    }
  }, [id, form])

  const onSubmit = (data: TTaskFormData) => {}

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'
      onClick={closeModal}
    >
      <div
        className='mx-4 max-h-[90vh] w-full max-w-sm overflow-y-auto rounded-lg bg-white p-6 dark:bg-gray-800'
        onClick={e => {
          e.stopPropagation()
        }}
      >
        <div className='mb-6 flex items-center justify-between'>
          <h2 className='text-xl font-bold'>Edit task {id}</h2>
          <Button variant='ghost' size='icon' onClick={closeModal} className='h-8 w-8'>
            <X className='h-4 w-4' />
          </Button>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter title' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Controller
              control={form.control}
              name='dueDate'
              render={({ field: { onChange, value } }) => (
                <FormItem className='flex flex-col'>
                  <FormLabel>Due date</FormLabel>
                  <FormControl>
                    <Popover.Root>
                      <Popover.Trigger asChild>
                        <Button
                          variant={'outline'}
                          data-empty={!value}
                          className='w-full justify-start text-left font-normal data-[empty=true]:text-muted-foreground'
                        >
                          <CalendarIcon className='mr-2 h-4 w-4' />
                          {value ? format(value, 'PPP') : <span>Pick a date</span>}
                        </Button>
                      </Popover.Trigger>
                      <Popover.Content className='z-50 w-auto p-0' align='start'>
                        <Calendar mode='single' selected={value} onSelect={onChange} initialFocus />
                      </Popover.Content>
                    </Popover.Root>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Controller
              control={form.control}
              name='icon'
              render={({ field: { onChange, value } }) => (
                <FormItem>
                  <FormLabel>Icon</FormLabel>
                  <FormControl>
                    <div className='flex flex-wrap gap-2'>
                      {ICON_NAMES.map(name => {
                        const Icon = ICON_MAP[name]
                        return (
                          <Button
                            type='button'
                            key={name}
                            variant={value === name ? 'default' : 'outline'}
                            onClick={() => onChange(name)} // ← ИСПРАВЛЕНО: передаем name, а не Icon
                            className='h-10 w-10 p-0'
                          >
                            <Icon size={18} />
                          </Button>
                        )
                      })}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='flex justify-end gap-3 pt-4'>
              <Button type='button' variant='outline' onClick={closeModal}>
                Cancel
              </Button>
              <Button type='submit'>Save</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
