import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

export const NotificationItemContainer = styled.li`
  width: 100%;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 2rem;

  &:hover {
    background-color: ${theme.colors.whitePrimary};
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0 0.5rem;
  padding-left: 0.5rem;
`;

export const MessageWrapper = styled.div`
  width: 100%;
  font-size: 1.3rem;
`;

export const UserWrapper = styled.span`
  font-weight: ${theme.fontWeight.bold};
`;

export const AuthorWrapper = styled.span`
  font-weight: ${theme.fontWeight.semiBold};
`;

export const ContentWrapper = styled.span`
  font-weight: ${theme.fontWeight.medium};
`;

export const TimeWrapper = styled.span`
  width: 4rem;
  flex-shrink: 0;
  font-size: 1.1rem;
  color: ${theme.colors.gray};
`;
