import styled from '@emotion/styled';
import { Link, useLocation } from 'react-router-dom';

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

interface PropsBottomNavBar {
  path: pathType;
  icon: React.ReactNode;
}

type pathType =
  | typeof MAIN_PATH
  | typeof NOTIFICATION_PATH
  | typeof PROFILE_PATH
  | typeof REVIEW_PATH
  | `${typeof PROFILE_PATH}/${string}`;

const BottomNavBarWrapper = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  bottom: 0;
  left: 0;
  padding: 16px;
  border-top: 1px solid #ccc;
`;

const LinkWrapper = styled(Link)<{ active: string }>`
  color: ${({ active }) => (active === 'true' ? '#f86f03' : '#ccc')};
  transition: color 0.3s;
  &:hover {
    color: #f86f03;
  }
`;

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
    { path: MAIN_PATH, icon: <MainIcon /> },
    { path: REVIEW_PATH, icon: <ReviewIcon /> },
    { path: NOTIFICATION_PATH, icon: <NotificationIcon /> },
    { path: `${PROFILE_PATH}/${authUser?._id}`, icon: <ProfileIcon /> },
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
