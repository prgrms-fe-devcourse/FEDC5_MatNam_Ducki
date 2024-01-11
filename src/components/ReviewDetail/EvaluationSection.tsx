import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetDetail, useLike } from '@/hooks/ReviewDetail';
import { useCheckAuthUser } from '@/hooks/useAuth';
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

const EvaluationRightWrapper = styled.div`
  display: flex;
  gap: 0.625rem;
`;

const LikeBtn = styled.button<{ isLike: boolean }>`
  border: 1px solid ${theme.colors.accent};
  padding: 0.1875rem 0.8125rem;
  border-radius: 8px;

  ${(props) =>
    props.isLike &&
    css`
      background-color: ${theme.colors.accent};
    `}
`;

export default function EvaluationSection() {
  const { postId } = useParams() as { postId: string };
  const { data: postData } = useGetDetail({ postId });
  const { data: userData } = useCheckAuthUser();

  const [isLike, setIsLike] = useState(false);
  const [likeCount, setLikeCount] = useState(postData!.likes.length);
  const [timer, setTimer] = useState(0);

  const { mutate } = useLike({ postId, isLike });

  //최초 렌더링시 좋아요 체크
  useEffect(() => {
    setIsLike(postData?.likes.some((like) => like?.user === userData?._id)!);
  }, [postData, userData]);

  const handleLikeClick = () => {
    setIsLike((prevState) => !prevState);

    isLike
      ? setLikeCount((prev) => prev - 1)
      : setLikeCount((prev) => prev + 1);

    if (timer) clearTimeout(timer);
    const newTimer = window.setTimeout(() => {
      postData?.likes.some((like) => like?.user === userData?._id) === isLike &&
        mutate();
    }, 500);

    setTimer(newTimer);
  };

  if (postData && userData) {
    return (
      <StyledEvaluationSection>
        <EvaluationLeftWrapper>
          <LikeText>좋아요 {likeCount}</LikeText>
        </EvaluationLeftWrapper>
        <EvaluationRightWrapper>
          <LikeBtn isLike={isLike} onClick={handleLikeClick}>
            👍
          </LikeBtn>
        </EvaluationRightWrapper>
      </StyledEvaluationSection>
    );
  }
}
