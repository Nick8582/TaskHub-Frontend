import { useEffect } from 'react'

import { useMutation, useQuery } from '@tanstack/react-query'
import type { UseFormReset } from 'react-hook-form'
import { toast } from 'sonner'
import type z from 'zod'

import { taskClientGetById, taskClientUpdate } from '@/services/tasks/task-client.service'
import type { Database } from '@/types/db.types'
import type { ICON_MAP } from '@/utils/icon-map'
import type { TaskSchema } from '@/zod-sсhemes/task.zod'

interface useTaskQueryProps {
  id: string
  reset: UseFormReset<z.infer<typeof TaskSchema>>
  closeModal: () => void
}

export function useTaskQuery({ id, reset, closeModal }: useTaskQueryProps) {
  const { isSuccess, data } = useQuery({
    queryKey: ['task', id],
    queryFn: () => taskClientGetById(id),
    enabled: !!id,
  })

  useEffect(() => {
    if (!data) return

    reset({
      title: data.title,
      due_date: new Date(data.due_date),
      icon: data.icon as keyof typeof ICON_MAP,
    })
  }, [isSuccess])

  const { mutate, isPending } = useMutation({
    mutationKey: ['task', 'updata', id],
    mutationFn: (data: Database['public']['Tables']['task']['Update']) =>
      taskClientUpdate(id, data),
    onSuccess: () => {
      toast.success('Task update successfully')
      closeModal()
    },
    onError: () => {
      toast.error('Failed to update task')
    },
  })

  return {
    isPending,
    mutate,
  }
}
