import { Message } from '@/types/response';

import {
  MessageItemWrapper,
  ReceiverMessage,
  ReceiverMessageWrapper,
  SenderMessage,
  SenderMessageWrapper,
} from './style';

interface MessageItemProps {
  myId: string;
  messageItem: Message;
}

export default function MessageItem({ myId, messageItem }: MessageItemProps) {
  const { receiver, message } = messageItem;
  const isMyMessage = myId === receiver._id;

  return (
    <MessageItemWrapper>
      {isMyMessage ? (
        <SenderMessageWrapper>
          <SenderMessage>{message}</SenderMessage>
        </SenderMessageWrapper>
      ) : (
        <ReceiverMessageWrapper>
          <ReceiverMessage>{message}</ReceiverMessage>
        </ReceiverMessageWrapper>
      )}
    </MessageItemWrapper>
  );
}
