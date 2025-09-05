import Link from 'next/link'

import { Pages } from '@/shared/constants/page.constants'

interface TaskEditPageProps {
  params: Promise<{ id: string }>
}

export default async function TaskEditPage({ params }: TaskEditPageProps) {
  const { id } = await params

  return (
    <div className='p-6'>
      <div>
        <Link href={Pages.DASHBOARD}>Back to Dashboard</Link>
      </div>
    </div>
  )
}
