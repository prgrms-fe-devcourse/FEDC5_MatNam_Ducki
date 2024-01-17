import { Theme } from '@emotion/react';

export const theme: Theme = {
  colors: {
    primary: '#EEA734', // 메인 색상
    secondary: '#FFA41B', // 보조 색상
    lightSecondary: '#FEF8ED',
    whitePrimary: '#FFF7F5',
    accent: '#525FE1', // 강조 색상
    gray: '#868686',
    lightGray: '#F3F2F2',
    green: '#2CC069',
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
    navbarSize: '8rem',
  },
  device: {
    mobile: ' 375px',
    tablet: ' 768px',
    laptop: ' 1024px',
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
