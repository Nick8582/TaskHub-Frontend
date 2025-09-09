import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { AuthForm } from '@/components/auth-form'
import { DashboardPages } from '@/shared/constants/dashboard-pages.constants'
import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'
import { getServerAuth } from '@/utils/supabase/get-server-auth'

export const metadata: Metadata = {
  title: 'Login',
  ...NO_INDEX_PAGE,
}

export default async function LoginPageRoot() {
  const user = await getServerAuth()

  if (user) {
    redirect(DashboardPages.DASHBOARD)
  }
  return <AuthForm />
}
