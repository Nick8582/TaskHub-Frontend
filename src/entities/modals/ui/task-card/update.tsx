import { useEffect, type FC } from "react"
import { useForm } from "react-hook-form"

import type { ITask } from "@/src/shared/types/task.types"
import { Button } from "@/src/shared/ui/button"
import { Input } from "@/src/shared/ui/input"
import { Dialog } from "@/src/shared/ui/modal"

interface TaskCardUpdateProps {
  isOpen: boolean
  onClose: () => void
  task: ITask
}

interface TaskFormData {
  title: string
}

export const ModalTaskCardUpdate: FC<TaskCardUpdateProps> = ({
  isOpen,
  onClose,
  task,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TaskFormData>({
    defaultValues: {
      title: task.title,
    },
  })

  const onSubmit = (data: TaskFormData) => {
    const updatedTask = { ...task, title: data.title }

    console.log(updatedTask)
    onClose()
  }

  useEffect(() => {
    reset({ title: task.title })
  }, [task, reset])

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title={`Edit to ${task.title}`}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          fullWidth
          placeholder="Task title"
          {...register("title", {
            required: "Title is required",
            minLength: {
              value: 3,
              message: "Title must be at least 3 characters",
            },
            maxLength: {
              value: 100,
              message: "Title must be less than 100 characters",
            },
          })}
          error={errors.title?.message}
        />

        <Button type="submit" className="bg-primary text-hard-white">
          Save
        </Button>
      </form>
    </Dialog>
  )
}
