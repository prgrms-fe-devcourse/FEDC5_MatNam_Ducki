import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { theme } from '@/styles/Theme';

export const BottomNavBarWrapper = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  height: 8rem;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  bottom: 0;
  left: 0;
  padding: 2rem;
  border-top: 1px solid ${theme.colors.lightGray};
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
  width: 6rem;
  height: 5.4rem;
`;

export const TextStyle = styled.span`
  font-size: 1.2rem;
`;
