import { useEffect, useRef, useState, type FC } from 'react'
import Image from 'next/image'

import { Paperclip } from 'lucide-react'

import { AnimateIcon } from '@/components/animate-ui/icons/icon'
import { Send } from '@/components/animate-ui/icons/send'
import type { TChatMessageWithProfile } from '@/types/chat.types'
import { createClient } from '@/utils/supabase/client'
import { ChatMessage } from '@/view/dashboard/components/chat/chat-message'

interface ChatProps {
  userId: string
}

export const Chat: FC<ChatProps> = ({ userId }) => {
  const supabase = useRef(createClient())

  const [messages, setMessages] = useState<TChatMessageWithProfile[]>([])
  const [text, setText] = useState('')

  useEffect(() => {
    supabase.current
      .from('chat_message')
      .select('*, profile:profile (id,  name, avatar_path)')
      .order('created_at', { ascending: true })
      .then(({ data }) => {
        if (!data) return

        setMessages(data)
      })
    const channel = supabase.current
      .channel('chat_messages')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'chat_message' },
        async payload => {
          const { data } = await supabase.current
            .from('chat_message')
            .select('*, profile:profile (id, name, avatar_path)')
            .eq('id', payload.new.id)
            .single()

          if (data) {
            setMessages(prev => [...prev, data])
          }
        }
      )
      .subscribe()

    return () => {
      supabase.current.removeChannel(channel)
    }
  }, [])

  const sendMessage = async () => {
    if (!text.trim()) return

    await supabase.current.from('chat_message').insert({
      text,
      user_id: userId,
    })

    setText('')
  }

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
            src={messages[0]?.profile?.avatar_path || ''}
            className='mr-2 h-10 w-10 rounded-full'
            width={40}
            height={40}
          />
          <div className='leading-snug text-white'>
            <div className='font-medium'>{messages[0]?.profile?.name}</div>
            <div className='text-sm font-medium opacity-70'>Project Manager</div>
          </div>
        </div>
        <div className='flex-1 overflow-y-auto bg-[#3C3495] p-3.5 px-3.5 py-3'>
          <div className='flex flex-col gap-4'>
            {messages.map(msg => (
              <ChatMessage key={msg.id} message={msg} userId={userId} />
            ))}
          </div>
        </div>
        <div>
          <div className='flex items-center gap-2 bg-[#5B51B1] px-3.5 py-3'>
            <div className='bg-violet-300'></div>
            <button className='shrink-0 text-white'>
              <Paperclip />
            </button>
            <input
              type='text'
              value={text}
              onChange={e => setText(e.target.value)}
              className='flex-1 bg-transparent text-white placeholder:text-[#B2AEDF] focus:outline-none'
              placeholder='Type hare...'
            />
            <AnimateIcon animateOnHover>
              <button
                onClick={sendMessage}
                className='transition-color flex size-9 items-center justify-center rounded-full bg-[#9383d8] p-1 text-white opacity-90 hover:opacity-100'
              >
                <Send size={18} />
              </button>
            </AnimateIcon>
          </div>
        </div>
      </div>
    </div>
  )
}
