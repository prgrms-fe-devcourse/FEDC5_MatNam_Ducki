import { useLocation } from 'react-router-dom';

import {
  MAIN_PATH,
  NOTIFICATION_PATH,
  PROFILE_PATH,
  REVIEW_PATH,
} from '@/constants';
import { useCheckAuthUser } from '@/hooks/useAuth';

import MainIcon from '../Common/Icons/MainIcon';
import NotificationIcon from '../Common/Icons/NotificationIcon';
import ProfileIcon from '../Common/Icons/ProfileIcon';
import ReviewIcon from '../Common/Icons/ReviewIcon';
import { BottomNavBarWrapper, LinkWrapper } from './style';

interface PropsBottomNavBar {
  path: pathType;
  icon: React.ReactNode;
  title: React.ReactNode;
}

type pathType =
  | typeof MAIN_PATH
  | typeof NOTIFICATION_PATH
  | typeof PROFILE_PATH
  | typeof REVIEW_PATH
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

  const navItems: PropsBottomNavBar[] = [
    {
      path: MAIN_PATH,
      icon: <MainIcon />,
      title: <div>홈</div>,
    },
    {
      path: REVIEW_PATH,
      icon: <ReviewIcon />,
      title: <div>후기 작성</div>,
    },
    {
      path: NOTIFICATION_PATH,
      icon: <NotificationIcon />,
      title: <div>알림</div>,
    },
    {
      path: `${PROFILE_PATH}/${authUser?._id}`,
      icon: <ProfileIcon />,
      title: <div>내 정보</div>,
    },
  ];

  return (
    <BottomNavBarWrapper>
      {navItems.map(({ path, icon, title }) => (
        <LinkWrapper
          key={path}
          to={path}
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
            handleButtonClick(e, path)
          }
          active={isPathActive(path).toString()}>
          {icon}
          {title}
        </LinkWrapper>
      ))}
    </BottomNavBarWrapper>
  );
}
