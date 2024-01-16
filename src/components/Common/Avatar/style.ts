import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

export const ImageComponent = styled.img<{ borderRadius: number }>`
  object-fit: cover;
  border: 1px solid ${theme.colors.lightGray};
  transition: opacity 0.2s ease-out;
  background-color: #cdcdcd;
  border-radius: ${(props) => props.borderRadius}%;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  cursor: pointer;
`;
