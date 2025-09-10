'use client'

import type { FC } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import type z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { BubbleBackground } from '@/components/animate-ui/components/backgrounds/bubble'
import { signInWithEmail } from '@/app/(auth)/actions'
import { AuthSchema } from '@/zod-sсhemes/auth.zod'

export const AuthForm: FC = () => {
  const form = useForm<z.infer<typeof AuthSchema>>({
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = (data: z.infer<typeof AuthSchema>) => {
    signInWithEmail({ email: data.email })
      .then(() => {
        toast.success('Link to sign in has been sent to your email. Please check your inbox.')
      })
      .catch(e => {
        toast.error(`Filed to send sing-in link. Please try again later. Error: ${e.message}`)
      })
      .finally(() => {
        form.reset()
      })
  }

  return (
    <BubbleBackground className='absolute inset-0 flex h-full w-full items-center justify-center'>
      <div className='relative z-10 w-full max-w-sm rounded-lg bg-white p-6 shadow-2xl dark:bg-gray-800'>
        <h1 className='mb-4 text-xl font-bold'>Sign in with link</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter email' type='email' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='flex justify-end gap-3 pt-4'>
              <Button type='submit'>Send Link</Button>
            </div>
          </form>
        </Form>
      </div>
    </BubbleBackground>
  )
}
