import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetDetail, useLike } from '@/hooks/ReviewDetail';
import { useCheckAuthUser } from '@/hooks/useAuth';
import { theme } from '@/styles/Theme';

import LikeIcon from '../Common/Icons/LikeIcon';

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
        <EvaluationLeftWrapper onClick={handleLikeClick}>
          <LikeIcon fill={isLike ? '#EEA734' : 'gray'} />
          <LikeText>좋아요 {likeCount}개</LikeText>
        </EvaluationLeftWrapper>
      </StyledEvaluationSection>
    );
  }
}

const StyledEvaluationSection = styled.div`
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const EvaluationLeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LikeText = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${theme.fontWeight.regular};
`;
