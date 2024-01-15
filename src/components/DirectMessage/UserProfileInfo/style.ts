import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

export const UserListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 1rem;
`;

export const UserItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

export const UserProfileWrapper = styled.div`
  position: relative;
`;

export const UserProfileImage = styled.img`
  width: 5rem;
  height: 5rem;
  border: 1px solid #e2e8f0;
  border-radius: 100%;
  object-fit: cover;
`;

export const UserName = styled.span`
  position: relative;
  font-weight: ${theme.fontWeight.medium};
`;

export const UserOnlineIconWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0rem;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 100%;
  background-color: ${theme.colors.whitePrimary};
  border: 1px solid #e2e8f0;
`;

export const UserOnlineIcon = styled.div<{ active: string }>`
  position: absolute;
  right: 0.1rem;
  bottom: 0.1rem;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 100%;
  background-color: ${({ active }) =>
    active === 'true' ? theme.colors.green : theme.colors.gray};
`;

export const ChatPlusButton = styled.button`
  padding: 1rem;
  color: ${theme.colors.primary};
`;
