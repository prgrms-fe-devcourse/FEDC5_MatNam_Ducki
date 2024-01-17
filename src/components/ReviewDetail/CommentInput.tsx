import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { useCreateComment, useGetDetail } from '@/hooks/ReviewDetail';
import { useSendNotifications } from '@/hooks/useNotification';
import { theme } from '@/styles/Theme';

import Button from '../Common/Button/Button';
import HookFormInput from '../Common/HookFormInput';

export default function CommentInput() {
  const { postId } = useParams() as { postId: string };
  const { data: postData } = useGetDetail({ postId });
  const { register, handleSubmit, reset } = useForm<{ comment: string }>();
  const { mutate } = useCreateComment({ postId });
  const { mutate: sendNotification } = useSendNotifications();

  if (postData) {
    const onSubmit: SubmitHandler<{ comment: string }> = ({ comment }) => {
      mutate({ comment, postId });
      sendNotification({
        notificationType: 'COMMENT',
        notificationTypeId: postData?._id,
        userId: postData?.author._id,
        postId,
      });

      reset();

      //TODO: scroll 최하단으로
    };

    return (
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <HookFormInput
          register={register}
          name="comment"
          placeholder="댓글 작성하기"
          css={css`
            width: 100%;
            height: 100%;
            padding: 0.625rem 1.25rem;
            background-color: ${theme.colors.lightGray};
            border: 0;
            border-radius: 0.625rem;
            outline: none;
          `}
        />
        <Button width="60px" height="40px" textSize="14px">
          전송
        </Button>
      </FormWrapper>
    );
  }
}

const FormWrapper = styled.form`
  max-width: ${({ theme }) => theme.device.mobile};
  width: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  padding: 1.5rem 2rem 3rem 2rem;
  background-color: white;
  gap: 1.5rem;
  position: fixed;
  bottom: 60px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 1rem;
`;
