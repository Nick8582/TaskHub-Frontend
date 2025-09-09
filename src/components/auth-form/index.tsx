'use client'

import type { FC } from 'react'
import { useRouter } from 'next/navigation'

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
import { Pages } from '@/shared/constants/page.constants'
import { AuthSchema } from '@/zod-sсhemes/auth.zod'

interface AuthFormProps {
  type: 'login' | 'register' | 'forgot-password' | 'reset-password'
}

export const AuthForm: FC<AuthFormProps> = ({ type }) => {
  const isLogin = type === 'login'

  const router = useRouter()

  const form = useForm<z.infer<typeof AuthSchema>>({
    resolver: zodResolver(AuthSchema),
  })

  const onSubmit = (data: z.infer<typeof AuthSchema>) => {
    toast.success(isLogin ? 'Logged in successfully' : 'Registered successfully')
    form.reset()
    router.replace(Pages.DASHBOARD)
  }

  return (
    <BubbleBackground className='absolute inset-0 flex h-full w-full items-center justify-center'>
      <div className='relative z-10 w-full max-w-sm rounded-lg bg-white p-6 shadow-2xl dark:bg-gray-800'>
        <h1 className='mb-4 text-xl font-bold'>{isLogin ? 'Login' : 'Register'}</h1>

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
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter password' type='password' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className='flex justify-end gap-3 pt-4'>
              <Button type='submit'>{isLogin ? 'Login' : 'Register'}</Button>
            </div>
          </form>
        </Form>
      </div>
    </BubbleBackground>
  )
}
