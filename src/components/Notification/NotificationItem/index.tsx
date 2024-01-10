import { MESSAGE } from '@/constants/notification';

import { NotificationItemContainer } from './style';

export interface DummyData {
  _id: string;
  seen: boolean;
  author: {
    fullName: string;
  };
  user: string;
  comment: string;
  createdAt: string;
  updatedAt: string;
}

interface NotificationItemProps {
  notification: DummyData;
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
