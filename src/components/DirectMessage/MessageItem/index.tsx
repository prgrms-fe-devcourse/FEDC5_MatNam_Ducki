import CalendarIcon from '@/components/Common/Icons/CalendarIcon';
import { Message } from '@/types/response';
import { convertUtcToKstDate, convertUtcToKstTime } from '@/utils/convertTime';

import {
  calendarStyle,
  CreatedTimeText,
  DateText,
  MessageItemWrapper,
  ReceiverMessage,
  ReceiverMessageWrapper,
  SeenText,
  SenderMessage,
  SenderMessageWrapper,
} from './style';

interface MessageItemProps {
  userId: string;
  messageItem: Message;
  prevDate: string | null;
}

export default function MessageItem({
  userId,
  messageItem,
  prevDate,
}: MessageItemProps) {
  const { sender, message, createdAt, seen } = messageItem;
  const isUserMessage = userId === sender._id;

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
      {isUserMessage ? (
        <ReceiverMessageWrapper>
          <ReceiverMessage>{message}</ReceiverMessage>
          <CreatedTimeText>{currentTime}</CreatedTimeText>
        </ReceiverMessageWrapper>
      ) : (
        <SenderMessageWrapper>
          {!seen && <SeenText>1</SeenText>}
          <CreatedTimeText>{currentTime}</CreatedTimeText>
          <SenderMessage>{message}</SenderMessage>
        </SenderMessageWrapper>
      )}
    </MessageItemWrapper>
  );
}
