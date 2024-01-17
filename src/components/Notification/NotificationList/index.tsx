import { PropsWithChildren } from 'react';

import { Notification } from '@/types/response';

import NotificationItem from '../NotificationItem';
import {
  EmptyConversationText,
  EmptyConversationWrapper,
  NotificationListContainer,
} from './style';

interface NotificationListProps {
  notifications: Notification[] | null;
}

export default function NotificationList({
  notifications,
}: PropsWithChildren<NotificationListProps>) {
  if (notifications && notifications.length !== 0) {
    return (
      <NotificationListContainer>
        {notifications.map((notification) => (
          <NotificationItem
            key={notification._id}
            notification={notification}
          />
        ))}
      </NotificationListContainer>
    );
  }

  return (
    <EmptyConversationWrapper>
      <EmptyConversationText>아직 받은 알림이 없어요 🥲</EmptyConversationText>
      <EmptyConversationText>
        메세지를 나누거나 후기를 올려보세요!
      </EmptyConversationText>
    </EmptyConversationWrapper>
  );
}
