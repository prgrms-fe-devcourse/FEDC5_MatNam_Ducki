import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { theme } from '@/styles/Theme';

export const BottomNavBarWrapper = styled.div`
  position: fixed;
  max-width: ${({ theme }) => theme.device.mobile};
  width: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  height: 8rem;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  bottom: 0;
  padding: 2rem;
  border-top: 1px solid ${theme.colors.lightGray};

  border-right: 1px solid black;
  border-left: 1px solid black;
`;

export const LinkWrapper = styled(Link)<{ active: string }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  color: ${({ active }) =>
    active === 'true' ? theme.colors.primary : theme.colors.gray};
  transition: color 0.3s;
  &:hover {
    color: ${theme.colors.primary};
  }
`;

export const TextStyle = styled.span`
  font-size: 1.2rem;
`;
