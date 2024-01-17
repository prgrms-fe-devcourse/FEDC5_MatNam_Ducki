import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

export const NotificationItemContainer = styled.li`
  display: flex;
  flex-grow: 1;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  &:hover {
    background-color: ${theme.colors.whitePrimary};
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const MessageWrapper = styled.div`
  font-size: 1.3rem;
  width: 21rem;
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
  font-size: 1.1rem;
  color: ${theme.colors.gray};
`;
