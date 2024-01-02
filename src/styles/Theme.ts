import { Theme } from '@emotion/react';

export const theme: Theme = {
  colors: {
    primary: '#F86F03', // 메인 색상
    secondary: '#FFA41B', // 보조 색상
    accent: '#525FE1', // 강조 색상
    white: 'FFF6F4',
  },
};

export type ThemeTypes = typeof theme;
