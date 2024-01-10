import { MESSAGE } from '@/constants/notification';
import { Notification } from '@/types/response';

interface NotificationItemProps {
  notification: Notification;
}

export default function NotificationItem({
  notification,
}: NotificationItemProps) {
  const { author, createdAt, post, follow } = notification;
  const notificationKeys = ['message', 'follow', 'like', 'comment'] as const;
  const key = notificationKeys.find(
    (notificationKey) => notificationKey in notification,
  )!;
  return (
    <li>
      <span>{author.fullName}</span>
      <span>{MESSAGE[key].text}</span>
    </li>
  );
}
