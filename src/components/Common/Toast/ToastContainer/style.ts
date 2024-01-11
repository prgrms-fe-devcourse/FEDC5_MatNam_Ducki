import styled from '@emotion/styled';

interface ToastWrapperProps {
  position?: string;
}

export const ToastWrapper = styled.div<ToastWrapperProps>`
  position: fixed;
  z-index: 50;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${({ position }) => {
    switch (position) {
      case 'top-left':
        return `
          top: 3rem;
          left: 0;
        `;
      case 'top-right':
        return `
          top: 3rem;
          right: 0;
        `;
      case 'bottom-left':
        return `
          bottom: 5rem;
          left: 0;
        `;
      case 'bottom-right':
        return `
          bottom: 5rem;
          right: 0;
        `;
      default:
        return `
          top: 3rem;
          right: 0;
        `;
    }
  }}
`;
