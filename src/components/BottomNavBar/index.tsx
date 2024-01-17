import { useLocation } from 'react-router-dom';

import {
  MAIN_PATH,
  MESSAGE_PATH,
  NOTIFICATION_PATH,
  PROFILE_PATH,
  REVIEW_PATH,
} from '@/constants';
import { useCheckAuthUser } from '@/hooks/useAuth';
import { useGetNotifications } from '@/hooks/useNotification';

import MainIcon from '../Common/Icons/MainIcon';
import MessageIcon from '../Common/Icons/MessageIcon';
import NotificationIcon from '../Common/Icons/NotificationIcon';
import ProfileIcon from '../Common/Icons/ProfileIcon';
import ReviewIcon from '../Common/Icons/ReviewIcon';
import NotificationBadge from '../Common/NotificationBadge';
import { BottomNavBarWrapper, LinkWrapper } from './style';

interface PropsBottomNavBar {
  path: pathType;
  icon: React.ReactNode;
}

type pathType =
  | typeof MAIN_PATH
  | typeof NOTIFICATION_PATH
  | typeof PROFILE_PATH
  | typeof REVIEW_PATH
  | typeof MESSAGE_PATH
  | `${typeof PROFILE_PATH}/${string}`;

export default function BottomNavBar() {
  const location = useLocation();
  const currentPathName = location.pathname;

  const isPathActive = (path: pathType) => {
    return currentPathName === path ? true : false;
  };

  const handleButtonClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: pathType,
  ) => {
    if (currentPathName === path) {
      e.preventDefault();
    }
  };

  const { data: authUser } = useCheckAuthUser();

  const { data: notifications } = useGetNotifications(authUser);

  const newNotification = notifications?.filter(
    (notification) => !notification.seen,
  );

  const navItems: PropsBottomNavBar[] = [
    {
      path: MAIN_PATH,
      icon: <MainIcon />,
    },
    {
      path: MESSAGE_PATH,
      icon: <MessageIcon />,
    },
    {
      path: REVIEW_PATH,
      icon: <ReviewIcon />,
    },
    {
      path: NOTIFICATION_PATH,
      icon: (
        <NotificationBadge count={newNotification?.length} maxCount={99}>
          <NotificationIcon />
        </NotificationBadge>
      ),
    },
    {
      path: `${PROFILE_PATH}/${authUser?._id}`,
      icon: <ProfileIcon />,
    },
  ];

  return (
    <BottomNavBarWrapper>
      {navItems.map(({ path, icon }) => (
        <LinkWrapper
          key={path}
          to={path}
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
            handleButtonClick(e, path)
          }
          active={isPathActive(path).toString()}>
          {icon}
        </LinkWrapper>
      ))}
    </BottomNavBarWrapper>
  );
}
