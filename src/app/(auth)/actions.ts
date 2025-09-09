'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClientFromServer } from '@/utils/supabase/server'

export async function signInWithEmail({ email }: { email: string }) {
  const supabase = await createClientFromServer()

  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      // set this to false if you do not want the user to be automatically signed up
      shouldCreateUser: true,
      emailRedirectTo: 'http://localhost:3000',
    },
  })

  if (error) {
    redirect('/error')
  }
  revalidatePath('/', 'layout')
  redirect('/')
}
