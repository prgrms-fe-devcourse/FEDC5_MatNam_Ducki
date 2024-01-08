import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

const StyledEvaluationSection = styled.div`
  margin: 1.5625rem 0;
  display: flex;
  justify-content: space-between;
`;

const EvaluationLeftWrapper = styled.div`
  display: flex;
  gap: 0.625rem;
`;

const LikeText = styled.span`
  color: ${theme.colors.accent};
  font-weight: ${theme.fontWeight.bold};
`;

const HateText = styled.span`
  color: ${theme.colors.secondary};
  font-weight: ${theme.fontWeight.bold};
`;

const EvaluationRightWrapper = styled.div`
  display: flex;
  gap: 0.625rem;
`;

const LikeBtn = styled.button`
  border: 1px solid ${theme.colors.accent};
  padding: 0.1875rem 0.8125rem;
  border-radius: 8px;
`;

const HateBtn = styled.button`
  border: 1px solid ${theme.colors.secondary};
  padding: 0.1875rem 0.8125rem;
  border-radius: 8px;
`;

export default function EvaluationSection() {
  return (
    <StyledEvaluationSection>
      <EvaluationLeftWrapper>
        <LikeText>좋아요 3</LikeText>
        <HateText>싫어요 0</HateText>
      </EvaluationLeftWrapper>
      <EvaluationRightWrapper>
        <LikeBtn>👍</LikeBtn>
        <HateBtn>👎</HateBtn>
      </EvaluationRightWrapper>
    </StyledEvaluationSection>
  );
}
