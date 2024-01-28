import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

export const Button = styled.button<{ isMe: boolean; isFollowing: boolean }>`
  background-color: ${(props) =>
    props.isMe || !props.isFollowing
      ? theme.colors.primary
      : theme.colors.gray};
  font-size: 1.4rem;
  border: none;
  border-radius: 1.5rem;
  padding: 0.5rem;
  cursor: pointer;
`;
