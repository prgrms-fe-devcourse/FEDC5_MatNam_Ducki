import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      lightSecondary: string;
      whitePrimary: string;
      accent: string;
      gray: string;
      lightGray: string;
    };
    size: {
      xSmall: string;
      small: string;
      medium: string;
      large: string;
      xLarge: string;
      xxLarge: string;
      fullSize: string;
      halfSize: string;
      noSize: string;
    };
    device: {
      mobile: string;
      tablet: string;
      laptop: string;
    };
    fontWeight: {
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
      extraBold: number;
      black: number;
    };
  }
}
