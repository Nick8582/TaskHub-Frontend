import type { FC } from 'react'
import Image from 'next/image'

import { Paperclip, Send } from 'lucide-react'

import { USERS } from '@/mock/users.data'
import { cn } from '@/utils'

const messages = [
  {
    id: 1,
    text: 'Morning! I`ve been working on the design elements',
    author: USERS[2],
    own: false,
    time: '09.28 am',
  },
  {
    id: 2,
    text: 'What`s great to hear! I`ve been focusing on market research',
    author: USERS[0],
    own: true,
    time: '09.40 am',
  },
  {
    id: 3,
    text: 'Morning! I`ve been working on the design elements',
    author: USERS[2],
    own: false,
    time: '09.47 am',
  },
]

export const Chat: FC = () => {
  return (
    <div className='flex h-screen flex-col'>
      <Image
        alt='Chat image'
        src={'/image/chat-image.png'}
        width={354}
        height={531}
        className='chat-header-image flex-shrink-0'
      />
      <div className='flex min-h-0 flex-1 flex-col'>
        <div className='flex items-center gap-2 bg-[#453C9C] p-3.5'>
          <Image
            alt='chat owner'
            src={USERS[2].avatarPath || ''}
            className='mr-2 h-10 w-10 rounded-full'
            width={40}
            height={40}
          />
          <div className='leading-snug text-white'>
            <div className='font-medium'>{USERS[2].name}</div>
            <div className='text-sm font-medium opacity-70'>Project Manager</div>
          </div>
        </div>
        <div className='flex-1 overflow-y-auto bg-[#3C3495] p-3.5 px-3.5 py-3'>
          <div className='flex flex-col gap-4'>
            {messages.map(msg => (
              <div
                key={msg.id}
                className={cn('flex items-end gap-2', msg.own ? 'justify-end' : 'justify-start')}
              >
                {!msg.own && (
                  <Image
                    src={msg.author.avatarPath || ''}
                    alt={msg.author.name}
                    width={40}
                    height={40}
                    className='rounded-full'
                  />
                )}
                <div className='max-w-3/4'>
                  <div className='mb-0.5 text-xs text-white'>
                    {msg.own ? (
                      <span className='space-x-1'>
                        <span className='opacity-60'>{msg.time}</span>{' '}
                        <span className='font-medium'>Me</span>
                      </span>
                    ) : (
                      <span className='space-x-1'>
                        <span className='font-medium'>{msg.author.name}</span>{' '}
                        <span className='opacity-60'>{msg.time}</span>
                      </span>
                    )}
                  </div>
                  <div
                    className={cn(
                      'rounded-xl px-4 py-2 text-sm text-white',
                      msg.own ? 'rounded-br-none bg-[#614BEE]' : 'rounded-bl-none bg-[#5B51B1]'
                    )}
                  >
                    {msg.text}
                  </div>
                </div>
                {msg.own && (
                  <Image
                    src={msg.author.avatarPath || ''}
                    alt={msg.author.name}
                    width={40}
                    height={40}
                    className='rounded-full'
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className='flex items-center gap-2 bg-[#5B51B1] px-3.5 py-3'>
            <button className='shrink-0 text-white'>
              <Paperclip />
            </button>
            <input
              type='text'
              className='w-full bg-transparent text-white placeholder:text-[#B2AEDF] focus:outline-none'
              placeholder='Type hare...'
            />
            <button className='transition-color flex size-9 items-center justify-center rounded-full bg-[#9383d8] p-1 text-white opacity-90 hover:opacity-100'>
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
