import Link from 'next/link'

import { DashboardPages } from '@/shared/constants/dashboard-pages.constants'

interface TaskEditPageProps {
  params: Promise<{ id: string }>
}

export default async function TaskEditPage({ params }: TaskEditPageProps) {
  const { id } = await params

  return (
    <div className='p-6'>
      <div>
        <Link href={DashboardPages.DASHBOARD}>Back to Dashboard</Link>
      </div>
    </div>
  )
}
