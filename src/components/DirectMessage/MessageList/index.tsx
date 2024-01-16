import { useEffect, useRef } from 'react';

import { Message } from '@/types/response';

import MessageItem from '../MessageItem';
import { MessageListWrapper } from './style';

interface MessageListProps {
  myId: string;
  messageList: Message[];
}

export default function MessageList({ myId, messageList }: MessageListProps) {
  const scrollRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messageList]);

  return (
    <MessageListWrapper ref={scrollRef}>
      {messageList.map((message) => (
        <MessageItem key={message._id} myId={myId} messageItem={message} />
      ))}
    </MessageListWrapper>
  );
}
