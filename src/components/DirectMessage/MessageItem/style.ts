import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

export const MessageItemWrapper = styled.ul``;

export const ReceiverMessageWrapper = styled.li`
  width: 100%;
  display: flex;
  align-items: end;
  gap: 1rem;
`;

export const DateText = styled.span`
  width: fit-content;
  display: flex;
  justify-content: center;
  color: ${theme.colors.whitePrimary};
  background-color: ${theme.colors.gray};
  padding: 0.4rem 1.4rem;
  margin: 0 auto 2rem;
  border-radius: 1rem;
  font-size: 1.2rem;
`;

export const ReceiverMessage = styled.div`
  width: fit-content;
  border-radius: 1rem 1rem 1rem 0;
  padding: 1.2rem;
  background-color: ${theme.colors.lightGray};
`;

export const SenderMessageWrapper = styled.li`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: end;
`;

export const SenderMessage = styled.div`
  width: fit-content;
  border-radius: 1rem 1rem 0 1rem;
  padding: 1.2rem;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.whitePrimary};
`;

export const CreatedTimeText = styled.span`
  color: ${theme.colors.gray};
  font-size: 1.2rem;
  padding: 0 1rem;
`;

export const SeenText = styled.span`
  color: ${theme.colors.gray};
  font-weight: ${theme.fontWeight.semiBold};
  font-size: 1.2rem;
`;

export const calendarStyle = css`
  margin-right: 0.6rem;
  margin-top: 0.1rem;
`;
