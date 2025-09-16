import { useState, type FC } from 'react'

import { DialogDescription } from '@radix-ui/react-dialog'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { AnimateIcon } from '@/components/animate-ui/icons/icon'
import { Plus } from '@/components/animate-ui/icons/plus'
import { createClientSubTask } from '@/services/tasks/task-client.service'

interface CreateSubTaskModalProps {
  taskId: string
}

export const CreateSubTaskModal: FC<CreateSubTaskModalProps> = ({ taskId }) => {
  const [title, setTitle] = useState('')
  const [isOpenModal, setIsOpenModal] = useState(false)

  const { mutate, isPending } = useMutation({
    mutationKey: ['addSubTask', taskId],
    mutationFn: () => createClientSubTask(taskId, { title }),
    onSuccess: () => {
      toast.success('Subtask added successfully')
      setTitle('')
      setIsOpenModal(false)
    },
    onError: error => {
      toast.error('Failed to add sub task', {
        id: 'subtask-add-error',
        description: error as unknown as string,
      })
    },
  })

  const handleAdd = () => {
    if (!title.trim()) {
      toast.error('Subtask title cannot be empty', { id: 'subtask-empty-title ' })
      return
    }

    mutate()
  }

  return (
    <Dialog open={isOpenModal} onOpenChange={setIsOpenModal}>
      <AnimateIcon animateOnHover>
        <DialogTrigger className='rounded-full bg-primary p-2 text-white transition-colors hover:bg-primary/90 dark:text-neutral-800'>
          <Plus size={18} />
        </DialogTrigger>
      </AnimateIcon>
      <DialogContent className='! max-w-sm'>
        <DialogHeader>
          <DialogTitle className='mb-4'>Create a sub task</DialogTitle>
          <DialogDescription>
            <Input
              className='mb-4'
              placeholder='Subtask title'
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <Button disabled={isPending} onClick={handleAdd}>
              {isPending ? 'Adding...' : 'Add Subtask'}
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
