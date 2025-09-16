'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { DashboardPages } from '@/shared/constants/dashboard-pages.constants'
import { PublicPages } from '@/shared/constants/public-pages.constants'
import { createClient } from '@/utils/supabase/client'

export const ConfirmSlicePage = () => {
  const params = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const verifyToken = async () => {
      const token_hash = params.get('token_hash')
      if (!token_hash) {
        return router.replace(PublicPages.LOGIN)
      }

      const { error } = await createClient().auth.verifyOtp({
        type: 'email',
        token_hash,
      })

      if (error) return router.replace(PublicPages.LOGIN)

      router.replace(DashboardPages.DASHBOARD)
    }

    verifyToken()
  }, [params, router])

  return <p>Verifying your email... Please wait.</p>
}
