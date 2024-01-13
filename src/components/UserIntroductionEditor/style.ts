import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

export const Introduction = styled.span`
  margin-top: 0.8rem;
  width: 26.2rem;
  box-sizing: border-box;
`;

export const IntroductionBar = styled.div`
  width: 33.5rem;
  border-bottom: 1px solid #ccc;
`;

export const IntroductionWrapper = styled.div<{ introductionLength: number }>`
  display: flex;
  width: 100%;
  height: 3.72rem;
  gap: 7rem;
`;

export const IntroductionForm = styled.form`
  display: flex;
  width: 33.5rem;
  height: 3.2rem;
  gap: 3.5rem;
`;

export const IntroductionButton = styled.button<{ isEditing: boolean }>`
  border: 0.16rem solid
    ${({ isEditing }) => (isEditing ? theme.colors.primary : '#ccc')};
  border-radius: 6px;
  padding: 0.16rem;
  font-weight: bold;
  background-color: {
    ${theme.colors.white}
  }
  color: ${theme.colors.primary};
  width: 4rem;
  height: 3.2rem;
  border: none;
`;
