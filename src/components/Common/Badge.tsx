import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

interface BadgeProps {
  label: string;
  color?: string;
}

const StyledBadge = styled.div<{ color: string }>`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.75rem;
  border-radius: 15px;
  font-size: 14px;
  background-color: ${(props) => props.color};
`;

const Label = styled.span``;

export default function Badge({
  label,
  color = `${theme.colors.whitePrimary}`,
}: BadgeProps) {
  return (
    <StyledBadge color={color}>
      <Label>{label}</Label>
    </StyledBadge>
  );
}
