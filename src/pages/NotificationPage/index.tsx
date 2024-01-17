import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import AnimationContainer from '@/components/Common/AnimationContainer';
import NotificationList from '@/components/Notification/NotificationList';
import {
  useGetNotifications,
  useSeenNotifications,
} from '@/hooks/useNotification';
import { userAtom } from '@/recoil/user';
import { PATH } from '@/routes/path';

import { NotificationContainer } from './style';

export default function NotificationPage() {
  const navigate = useNavigate();
  const user = useRecoilValue(userAtom);

  const { mutate: seenNotifications } = useSeenNotifications();

  const { data: notifications } = useGetNotifications(user);

  useEffect(() => {
    seenNotifications();
  }, []);

  useEffect(() => {
    if (!user) {
      alert('로그인이 필요합니다.');
      navigate(PATH.SIGNIN);
    }
  }, [navigate, user]);

  return (
    <AnimationContainer>
      <NotificationContainer>
        <NotificationList notifications={notifications} />
      </NotificationContainer>
    </AnimationContainer>
  );
}
