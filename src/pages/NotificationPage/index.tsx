import NotificationList from '@/components/Notification/NotificationList';

import { NotificationContainer } from './style';

export default function NotificationPage() {
  const notifications = [
    {
      _id: '1',
      seen: false,
      author: {
        // User 인터페이스에 따라 추가 정보를 넣어주세요.
        fullName: 'baek',
      },
      user: '2',
      comment: '3',
      createdAt: '2024-01-10T00:00:00Z',
      updatedAt: '2024-01-10T00:00:00Z',
    },
    {
      _id: '2',
      seen: false,
      author: {
        fullName: 'kim',
      },
      user: '2',
      comment: '4',
      createdAt: '2024-01-10T00:00:00Z',
      updatedAt: '2024-01-10T00:00:00Z',
    },
  ];

  return (
    <NotificationContainer>
      <header>알림 목록</header>
      <NotificationList notifications={notifications} />
    </NotificationContainer>
  );
}
