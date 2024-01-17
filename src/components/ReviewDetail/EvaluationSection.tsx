import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  useCreateLike,
  useDeleteLike,
  useGetDetail,
} from '@/hooks/ReviewDetail';
import { useCheckAuthUser } from '@/hooks/useAuth';
import { useSendNotifications } from '@/hooks/useNotification';
import { theme } from '@/styles/Theme';

import LikeIcon from '../Common/Icons/LikeIcon';

export default function EvaluationSection() {
  const { postId } = useParams() as { postId: string };
  const { data: postData } = useGetDetail({ postId });
  const { data: userData } = useCheckAuthUser();
  const { mutate: sendLike } = useSendNotifications();

  const [isLike, setIsLike] = useState(false);
  const [likeId, setLikeId] = useState(
    postData?.likes.find((like) => like.user === userData?._id)?._id,
  );

  const [likeCount, setLikeCount] = useState(postData!.likes.length);
  const [timer, setTimer] = useState(0);

  const { mutate: createMutate } = useCreateLike({ postId });
  const { mutate: deleteMutate } = useDeleteLike();

  //최초 렌더링시 좋아요 체크
  useEffect(() => {
    setIsLike(postData?.likes.some((like) => like?.user === userData?._id)!);
  }, [postData, userData]);

  if (userData && postData) {
    const handleLikeClick = () => {
      setIsLike((prevState) => !prevState);

      isLike
        ? setLikeCount((prev) => prev - 1)
        : setLikeCount((prev) => prev + 1);

      if (timer) clearTimeout(timer);
      const newTimer = window.setTimeout(() => {
        if (!isLike && !likeId) {
          createMutate(undefined, {
            onSuccess: (data) => {
              setLikeId(data?._id);
            },
          });
        }

        if (isLike && likeId) {
          deleteMutate(likeId, {
            onSuccess: () => {
              setLikeId(undefined);
            },
          });
        }
      }, 500);

      setTimer(newTimer);

      sendLike({
        notificationType: 'LIKE',
        notificationTypeId: postData._id,
        userId: postData.author._id,
        postId,
      });
    };
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
