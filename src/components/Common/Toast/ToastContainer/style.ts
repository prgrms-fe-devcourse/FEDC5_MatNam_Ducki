import styled from '@emotion/styled';

import { getPositionStyle } from '@/utils/getPositionStyle';

interface ToastWrapperProps {
  position?: string;
}

export const ToastWrapper = styled.div<ToastWrapperProps>`
  position: fixed;
  z-index: 50;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${({ position }) => getPositionStyle(position || 'top-center')};
`;
