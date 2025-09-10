import { redirect } from 'next/navigation'

import { PublicPages } from '@/shared/constants/public-pages.constants'
import { createClientFromServer } from '@/utils/supabase/server'

export async function getServerAuth(isNeedRedirect = false) {
  const supabase = await createClientFromServer()
  const { data, error } = await supabase.auth.getUser()

  if (error || !data?.user) {
    return isNeedRedirect ? redirect(PublicPages.LOGIN) : null
  }

  return data.user
}
