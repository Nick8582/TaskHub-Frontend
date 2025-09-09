import { useState, type FC } from 'react'

import { DialogDescription } from '@radix-ui/react-dialog'
import { Plus } from 'lucide-react'
import { observer } from 'mobx-react-lite'
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
import { taskStore } from '@/stores/task.store'

interface CreateSubTaskModalProps {
  taskId: string
}

export const CreateSubTaskModal: FC<CreateSubTaskModalProps> = observer(({ taskId }) => {
  const [title, setTitle] = useState('')
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleAdd = () => {
    if (!title.trim()) {
      toast.error('Subtask title cannot be empty', { id: 'subtask-empty-title ' })
      return
    }

    taskStore.addSubTask(taskId, { title })
    toast.success('Subtask added successfully')
    setTitle('')
    setIsOpenModal(false)
  }

  return (
    <Dialog open={isOpenModal} onOpenChange={setIsOpenModal}>
      <DialogTrigger className='rounded-full bg-primary p-2 text-white transition-colors hover:bg-primary/90 dark:text-neutral-800'>
        <Plus size={18} />
      </DialogTrigger>
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
            <Button onClick={handleAdd}>Add Subtask</Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
})
