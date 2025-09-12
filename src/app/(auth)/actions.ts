'use server'

import { createClient } from '@/utils/supabase'

export async function signInWithEmail({ email }: { email: string }) {
  const supabase = await createClient()

  return await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: true,
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/confirm`,
    },
  })
}
