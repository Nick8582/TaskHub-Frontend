import { TaskEditModalClient } from '@/components/modals/task/edit'

interface TaskEditModalProps {
  params: Promise<{ id: string }>
}

export default async function TaskEditModal({ params }: TaskEditModalProps) {
  const { id } = await params

  return <TaskEditModalClient id={id} />
}
