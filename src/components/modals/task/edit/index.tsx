'use client'

import { type FC } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { X } from 'lucide-react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import type z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { TaskDateField } from '@/components/modals/task/edit/TaskDateField'
import { TaskIconChooseField } from '@/components/modals/task/edit/TaskIconChooseField'
import { useModalClose } from '@/components/modals/task/edit/useModalClose'
import { useTaskQuery } from '@/components/modals/task/edit/useTaskQuery'
import { TaskSchema } from '@/zod-sсhemes/task.zod'

interface TaskEditModalClientProps {
  id: string
}

export const TaskEditModalClient: FC<TaskEditModalClientProps> = ({ id }) => {
  const { closeModal } = useModalClose()

  const form = useForm<z.infer<typeof TaskSchema>>({
    resolver: zodResolver(TaskSchema),
    defaultValues: {
      title: '',
      due_date: undefined,
      icon: undefined,
    },
  })

  const { isPending, mutate } = useTaskQuery({ id, reset: form.reset, closeModal })

  const onSubmit: SubmitHandler<z.infer<typeof TaskSchema>> = data => {
    mutate({ title: data.title, due_date: data.due_date.toISOString(), icon: data.icon })
  }

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

            <TaskDateField control={form.control} />

            <TaskIconChooseField control={form.control} />

            <div className='flex justify-end gap-3 pt-4'>
              <Button type='button' variant='outline' onClick={closeModal}>
                Cancel
              </Button>
              <Button type='submit' disabled={isPending}>
                {isPending ? 'Updating...' : 'Save'}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
