import { PropsWithChildren } from 'react';

import NotificationItem, { DummyData } from '../NotificationItem';
import { NotificationListContainer } from './style';

interface NotificationListProps {
  notifications: DummyData[];
}

export default function NotificationList({
  notifications,
}: PropsWithChildren<NotificationListProps>) {
  if (notifications.length) {
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
    <div>
      <span>알림이 없습니다.</span>
    </div>
  );
}
