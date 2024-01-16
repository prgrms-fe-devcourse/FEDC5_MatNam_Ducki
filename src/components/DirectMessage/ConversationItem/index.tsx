import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { userAtom } from '@/recoil/user';
import { PATH } from '@/routes/path';
import { Conversation, User } from '@/types/response';
import { getElapsedTime } from '@/utils/getElapsedTime';

import UserProfileInfo from '../UserProfileInfo';
import { ConversationItemWrapper } from './style';

interface ConversationItemProps {
  conversation: Conversation;
}
export default function ConversationItem({
  conversation,
}: ConversationItemProps) {
  const { sender, receiver, message, createdAt } = conversation;
  const [messageSender, setMessageSender] = useState<User>(sender);

  const userState = useRecoilValue(userAtom);

  const navigate = useNavigate();

  const navigateToUserMessage = () => {
    navigate(`${PATH.DIRECTMESSAGE}/${messageSender._id}`);
  };

  useEffect(() => {
    if (userState?._id !== receiver._id) {
      setMessageSender(receiver);
    }
  }, [conversation, userState]);

  return (
    <ConversationItemWrapper onClick={navigateToUserMessage}>
      <UserProfileInfo
        user={messageSender}
        message={message}
        lastSendDate={getElapsedTime(createdAt)}
      />
    </ConversationItemWrapper>
  );
}
