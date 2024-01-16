import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import NotificationList from '@/components/Notification/NotificationList';
import { useGetNotifications } from '@/hooks/useNotification';
import { userAtom } from '@/recoil/user';
import { PATH } from '@/routes/path';

import { NotificationContainer } from './style';

export default function NotificationPage() {
  const navigate = useNavigate();
  const user = useRecoilValue(userAtom);
  if (!user) {
    alert('로그인이 필요합니다.');
    navigate(PATH.SIGNIN);
  } else {
    const { data: notifications } = useGetNotifications(user);

    const validNotifications = notifications || [];

    return (
      <NotificationContainer>
        <NotificationList notifications={validNotifications} />
      </NotificationContainer>
    );
  }
}
