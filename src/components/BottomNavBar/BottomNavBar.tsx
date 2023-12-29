import styled from '@emotion/styled';
import { Link, useLocation } from 'react-router-dom';

import {
  MAIN_PATH,
  NOTIFICATION_PATH,
  PROFILE_PATH,
  REVIEW_PATH,
} from '@/constants';

interface PropsBottomNavBar {
  to: pathType;
  icon: React.ReactNode;
}

type pathType =
  | typeof MAIN_PATH
  | typeof NOTIFICATION_PATH
  | typeof PROFILE_PATH
  | typeof REVIEW_PATH;

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

const LinkWrapper = styled(Link as any)<{ active: boolean }>`
  color: ${({ active }) => (active ? '#f86f03' : '#ccc')};
  transition: color 0.3s;
  &:hover {
    color: #f86f03;
  }
`;

export default function BottomNavBar() {
  const location = useLocation();
  const currentPathName = location.pathname;

  const isPathActive = (path: pathType) => {
    return currentPathName === path;
  };
  const handleButtonClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: pathType,
  ) => {
    if (currentPathName === path) {
      e.preventDefault();
    }
  };
  const navItems: PropsBottomNavBar[] = [
    {
      to: MAIN_PATH,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
    },
    {
      to: REVIEW_PATH,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
          />
        </svg>
      ),
    },
    {
      to: NOTIFICATION_PATH,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
          />
        </svg>
      ),
    },
    {
      to: PROFILE_PATH,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      ),
    },
  ];
  return (
    <BottomNavBarWrapper>
      {navItems.map((item) => (
        <LinkWrapper
          key={item.to}
          to={item.to}
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
            handleButtonClick(e, item.to)
          }
          active={isPathActive(item.to)}>
          {item.icon}
        </LinkWrapper>
      ))}
    </BottomNavBarWrapper>
  );
}
