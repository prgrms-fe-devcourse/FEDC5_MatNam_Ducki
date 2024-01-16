import { MESSAGE } from '@/constants/notification';
import { Notification } from '@/types/response';

import { NotificationItemContainer } from './style';

interface NotificationItemProps {
  notification: Notification;
}

export default function NotificationItem({
  notification,
}: NotificationItemProps) {
  const { author, createdAt } = notification;
  const notificationKeys = ['message', 'follow', 'like', 'comment'] as const;
  const key = notificationKeys.find(
    (notificationKey) => notificationKey in notification,
  )!;
  return (
    <NotificationItemContainer>
      <div className="grow">
        <span>{author.fullName}</span>
        <span>{MESSAGE[key].text}</span>
      </div>
    </NotificationItemContainer>
  );
}
