'use server'

import { createClient } from '@/utils/supabase/client'

export async function signInWithEmail({ email }: { email: string }) {
  const supabase = await createClient()

  return await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: true,
    },
  })
}
