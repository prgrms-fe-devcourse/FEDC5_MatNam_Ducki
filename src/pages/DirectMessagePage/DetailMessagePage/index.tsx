import { useParams } from 'react-router-dom';

import MessageForm from '@/components/DirectMessage/MessageForm';
import MessageList from '@/components/DirectMessage/MessageList';
import UserProfileInfo from '@/components/DirectMessage/UserProfileInfo';
import { useGetUserMessages } from '@/hooks/useConversation';
import { useGetUser } from '@/hooks/useGetProfile';

import { DetailMessagePageWrapper, UserProfileWrapper } from './style';

export default function DetailMessagePage() {
  const { userId } = useParams();

  if (!userId) {
    return;
  }

  const { data: user } = useGetUser(userId);
  const { data: messageList, refetch: refetchMessages } =
    useGetUserMessages(userId);

  return (
    <DetailMessagePageWrapper>
      {user && (
        <UserProfileWrapper>
          <UserProfileInfo user={user} />
        </UserProfileWrapper>
      )}
      {messageList && <MessageList myId={userId} messageList={messageList} />}
      <MessageForm onRefetchMessages={refetchMessages} />
    </DetailMessagePageWrapper>
  );
}
