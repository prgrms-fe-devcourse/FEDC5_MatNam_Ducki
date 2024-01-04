import { Theme } from '@emotion/react';

export const theme: Theme = {
  colors: {
    primary: '#F87002', // 메인 색상
    secondary: '#FFA614', // 보조 색상
    accent: '#505FE2', // 강조 색상
    white: '#FFF7F5',
  },
  size: {
    xSmall: '0.5rem',
    small: '1rem',
    medium: '1.5rem',
    large: '2rem',
    xLarge: '2.5rem',
    xxLarge: '3rem',
    fullSize: '100%',
    halfSize: '50%',
    noSize: '0%',
  },
  device: {
    mobile: '(max-width: 480px)',
    tablet: '(max-width: 768px)',
    laptop: '(max-width: 1024px)',
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
};

export type ThemeTypes = typeof theme;
