import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

interface ButtonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  backgroundColor?: string;
  textSize?: string;
  textColor?: string;
  children: React.ReactNode;
  onClick?: () => void;
}
const CommonButton = styled.button<ButtonProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  font-size: ${(props) => props.textSize};
  color: ${(props) => props.textColor};
  font-weight: bold;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
export default function Button({
  width,
  height,
  borderRadius,
  backgroundColor,
  textSize,
  textColor,
  onClick,
  children,
  ...props
}: ButtonProps) {
  const theme = useTheme();
  return (
    <CommonButton
      width={width || theme.size.xLarge}
      height={height || theme.size.large}
      borderRadius={borderRadius || theme.size.xSmall}
      backgroundColor={backgroundColor || theme.colors.secondary}
      textSize={textSize || theme.size.small}
      textColor={textColor || theme.colors.white}
      onClick={onClick}
      {...props}>
      {children}
    </CommonButton>
  );
}
