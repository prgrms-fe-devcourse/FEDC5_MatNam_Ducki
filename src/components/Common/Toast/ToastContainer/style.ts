import styled from '@emotion/styled';

interface ToastWrapperProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const ToastWrapper = styled.div<ToastWrapperProps>`
  position: fixed;
  z-index: 50;
  display: flex;
  flex-direction: column;
  transform: translateX(-50%);
  gap: 1rem;
  ${({ position }) => {
    switch (position) {
      case 'top-left':
        return `
          top: 0;
          left: 0;
        `;
      case 'top-right':
        return `
          top: 0;
          right: 0;
        `;
      case 'bottom-left':
        return `
          bottom: 0;
          left: 0;
        `;
      case 'bottom-right':
        return `
          bottom: 0;
          right: 0;
        `;
      default:
        return `
          top: 0;
          right: 0;
        `;
    }
  }}
`;
