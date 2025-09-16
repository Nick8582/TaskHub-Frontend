import { memo, useState, type FC } from 'react'

import { Paperclip } from 'lucide-react'

import { AnimateIcon } from '@/components/animate-ui/icons/icon'
import { Send } from '@/components/animate-ui/icons/send'

interface ChatInputProps {
  sendMessage: (text: string) => Promise<void>
}

const ChatInput: FC<ChatInputProps> = ({ sendMessage }) => {
  const [text, setText] = useState('')

  return (
    <div className='flex items-center gap-2 bg-[#5B51B1] px-3.5 py-3'>
      <div className='bg-violet-300'></div>
      <button className='shrink-0 text-white' aria-label='Attach file'>
        <Paperclip />
      </button>
      <input
        type='text'
        value={text}
        aria-label='Type your message'
        onChange={e => setText(e.target.value)}
        className='flex-1 bg-transparent text-white placeholder:text-[#B2AEDF] focus:outline-none'
        placeholder='Type hare...'
      />
      <AnimateIcon animateOnHover>
        <button
          onClick={() => sendMessage(text).then(() => setText(''))}
          className='transition-color flex size-9 items-center justify-center rounded-full bg-[#9383d8] p-1 text-white opacity-90 hover:opacity-100'
        >
          <Send size={18} />
        </button>
      </AnimateIcon>
    </div>
  )
}

export default memo(ChatInput)
