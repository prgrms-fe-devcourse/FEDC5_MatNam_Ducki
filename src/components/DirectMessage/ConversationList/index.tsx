import { useGetAllConversations } from '@/hooks/useConversation';

import ConversationItem from '../ConversationItem';
import {
  ConversationListWrapper,
  EmptyConversationText,
  EmptyConversationWrapper,
} from './style';

export default function ConversationList() {
  const { data: conversations } = useGetAllConversations();

  return (
    <ConversationListWrapper>
      {conversations && conversations.length !== 0 ? (
        conversations.map((conversation) => (
          <ConversationItem
            key={conversation._id}
            conversation={conversation}
          />
        ))
      ) : (
        <EmptyConversationWrapper>
          <EmptyConversationText>유저를 검색해서 🔍</EmptyConversationText>
          <EmptyConversationText>메세지를 보내보세요!</EmptyConversationText>
        </EmptyConversationWrapper>
      )}
    </ConversationListWrapper>
  );
}
