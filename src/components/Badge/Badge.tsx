import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

import { theme } from '@/styles/Theme';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'blur' | 'focus';
}

const variantStyles = {
  blur: `
    background-color: ${theme.colors.whitePrimary};
  `,
  focus: `
    background-color: ${theme.colors.lightSecondary};
  `,
};

/**
 * @summary <Badge variant="outline">outline</Badge>
 * @param {string} variant - blur | focus
 * @param {React.ReactNode} children - Badge 내부에 들어갈 내용
 */

const BadgeComponent = styled.span<BadgeProps>`
  ${({ variant }) => variantStyles[variant || 'blur']}
  display: inline-block;
  min-height: 1.5rem;
  border-radius: 15px;
  padding: 0.5rem 1rem;
  width: fit-content;
  font-size: 1.5rem;
`;

export const Badge = ({
  variant,
  children,
  ...props
}: PropsWithChildren<BadgeProps>) => {
  return (
    <BadgeComponent variant={variant} {...props}>
      {children}
    </BadgeComponent>
  );
};
