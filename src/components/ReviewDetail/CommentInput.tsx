import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { useCreateComment } from '@/hooks/ReviewDetail';
import { useCheckAuthUser } from '@/hooks/useAuth';
import { theme } from '@/styles/Theme';

import Avatar from '../Common/Avatar/Avatar';
import HookFormInput from '../Common/HookFormInput';

const FormWrapper = styled.form`
  width: inherit;
  display: flex;
  background-color: white;
  gap: 0.9375rem;
  position: fixed;
  bottom: 60px;

  div {
    width: 100%;
  }
`;

export default function CommentInput() {
  const { postId } = useParams() as { postId: string };
  const { register, handleSubmit, reset } = useForm<{ comment: string }>();
  const { mutate } = useCreateComment({ postId });
  const { data, isLoading } = useCheckAuthUser();

  const onSubmit: SubmitHandler<{ comment: string }> = ({ comment }) => {
    mutate({ comment, postId });
    reset();

    //TODO: scroll 최하단으로
  };

  if (!isLoading && data) {
    return (
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Avatar imageUrl={data.image!} size="48px" />
        <HookFormInput
          register={register}
          name="comment"
          placeholder="댓글 달기"
          css={css`
            width: 100%;
            padding: 0.625rem 1.25rem;
            background-color: ${theme.colors.whitePrimary};
            border: 0;
            border-radius: 0.625rem;
            outline: none;
          `}
        />
      </FormWrapper>
    );
  }
}
