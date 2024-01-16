import CalendarIcon from '@/components/Common/Icons/CalendarIcon';
import { Message } from '@/types/response';
import { convertUtcToKstDate, convertUtcToKstTime } from '@/utils/convertTime';

import {
  calendarStyle,
  CreatedTime,
  DateText,
  MessageItemWrapper,
  ReceiverMessage,
  ReceiverMessageWrapper,
  SenderMessage,
  SenderMessageWrapper,
} from './style';

interface MessageItemProps {
  myId: string;
  messageItem: Message;
  prevDate?: string | null;
}

export default function MessageItem({
  myId,
  messageItem,
  prevDate,
}: MessageItemProps) {
  const { receiver, message, createdAt } = messageItem;
  const isMyMessage = myId === receiver._id;

  const currentTime = convertUtcToKstTime(createdAt);
  const currentDate = convertUtcToKstDate(createdAt);

  const isDayAfter = prevDate
    ? convertUtcToKstDate(prevDate) !== currentDate
    : false;

  return (
    <MessageItemWrapper>
      {(isDayAfter || prevDate == null) && (
        <DateText>
          <CalendarIcon css={calendarStyle} />
          {currentDate}
        </DateText>
      )}
      {isMyMessage ? (
        <SenderMessageWrapper>
          <CreatedTime>{currentTime}</CreatedTime>
          <SenderMessage>{message}</SenderMessage>
        </SenderMessageWrapper>
      ) : (
        <ReceiverMessageWrapper>
          <ReceiverMessage>{message}</ReceiverMessage>
          <CreatedTime>{currentTime}</CreatedTime>
        </ReceiverMessageWrapper>
      )}
    </MessageItemWrapper>
  );
}
