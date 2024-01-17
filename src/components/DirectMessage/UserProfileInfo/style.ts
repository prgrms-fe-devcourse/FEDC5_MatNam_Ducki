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
  align-items: center;
  justify-content: space-between;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const UserProfileWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
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
  flex-shrink: 0;
  margin-left: 1rem;
  margin-right: 1.5rem;
`;

export const Message = styled.span`
  color: ${theme.colors.gray};
  width: 100%;
  max-width: 16rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const LastSendDateText = styled.span`
  color: ${theme.colors.gray};
  font-size: 1.2rem;
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
