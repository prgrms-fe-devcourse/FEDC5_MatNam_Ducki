import { useTheme } from '@emotion/react';

import Button from './Button';

interface CTAButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  backgroundColor?: string;
  onClick?: () => void;
}

export default function CTAButton({
  children,
  disabled = false,
  backgroundColor,
  onClick,
}: CTAButtonProps) {
  const theme = useTheme();

  return (
    <Button
      width="100%"
      height="4.8rem"
      borderRadius="0.8rem"
      textSize="1.6rem"
      backgroundColor={
        disabled
          ? `${theme.colors.secondary}80`
          : backgroundColor ?? theme.colors.secondary
      }
      onClick={onClick}>
      {children}
    </Button>
  );
}
