'use client'

import { selectMessage } from '@/features/messageSlice'
import { useAppSelector } from '@/hooks/useRTK'
import { useEffect, useRef} from 'react'
import MessageItem from '../MesssageItem/MesssageItem'

const MessageArea = () => {
    const messages = useAppSelector(selectMessage)
    const data = messages.onYourData
    const scrollBottomRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        scrollBottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [data])

    return (
        <div className="w-full overflow-auto pt-10">
            {
                data.length !== 0 && data.map((d, index) => (
                    <MessageItem
                        isMan={d.isMan}
                        message={d.message}
                        key={index}
                    />
                ))
            }
            <div ref={scrollBottomRef} />
        </div>
    )
}

export default MessageArea;
