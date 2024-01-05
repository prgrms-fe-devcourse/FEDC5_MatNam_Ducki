import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'outline' | 'solid' | 'subtle';
}

const variantStyles = {
  outline: `
    background-color: #FFF7F5;
    color: #black;
  `,
  solid: `
    background-color: white;
    color: #a1a1aa; // gray-500에 해당하는 색상
  `,
  subtle: `
    background-color: #FFA614;
    color: #black;
  `,
};

const BadgeComponent = styled.span<BadgeProps>`
  ${({ variant }) => variantStyles[variant || 'outline']}
  display: inline-block;
  min-height: 1rem;
  border-radius: 15px;
  padding: 0.25rem 0.5rem;
  width: fit-content;
  font-size: 0.625rem;
`;

export const Badge = ({
  variant = 'outline',
  children,
  ...props
}: PropsWithChildren<BadgeProps>) => {
  return (
    <BadgeComponent variant={variant} {...props}>
      {children}
    </BadgeComponent>
  );
};
