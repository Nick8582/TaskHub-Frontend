import { type FC } from 'react'
import Image from 'next/image'

import ChatMessage from '@/view/dashboard/components/chat/chat-message'
import ChatInput from '@/view/dashboard/components/chat/ChatInput'
import { useChat } from '@/view/dashboard/components/chat/useChat'

interface ChatProps {
  userId: string
}

export const Chat: FC<ChatProps> = ({ userId }) => {
  const { messages, sendMessage } = useChat({ userId: userId })

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
        <ChatInput sendMessage={sendMessage} />
      </div>
    </div>
  )
}
