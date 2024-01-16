import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

export const MessageFormWrapper = styled.form`
  width: 100%;
  max-width: 37.5rem;
  position: fixed;
  left: 50%;
  bottom: calc(${theme.size.navbarSize} + 1.5rem);
  transform: translateX(-50%);
  padding: 0 2rem;
  color: ${theme.colors};
`;

export const BottomGradient = styled.div`
  position: absolute;
  left: 0;
  top: -4.5rem;
  width: 100%;
  height: 40px;
  z-index: 10;
  background: linear-gradient(to top, #ffffff, rgba(255, 255, 255, 0));
`;

export const MessageInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const MessageSendButton = styled.button`
  color: ${theme.colors.primary};
`;

export const inputStyle = css`
  padding: 1rem;
`;
