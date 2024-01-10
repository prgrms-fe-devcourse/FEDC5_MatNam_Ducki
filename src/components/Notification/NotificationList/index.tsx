import { PropsWithChildren } from 'react';

import { Notification } from '@/types/response';

import NotificationItem from '../NotificationItem';

interface NotificationListProps {
  notifications: Notification[];
}

export default function NotificationList({
  notifications,
}: PropsWithChildren<NotificationListProps>) {
  if (notifications.length) {
    return (
      <ul>
        {notifications.map((notification) => (
          <NotificationItem
            key={notification._id}
            notification={notification}
          />
        ))}
      </ul>
    );
  }

  return (
    <div>
      <span>알림이 없습니다.</span>
    </div>
  );
}
