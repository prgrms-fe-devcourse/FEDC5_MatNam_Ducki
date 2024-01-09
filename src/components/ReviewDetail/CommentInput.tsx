import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useCreateComment } from '@/hooks/ReviewDetail';
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
  const { register, handleSubmit, reset } = useForm<{ comment: string }>();
  const { mutate } = useCreateComment();

  const onSubmit: SubmitHandler<{ comment: string }> = ({ comment }) => {
    mutate({
      comment,
      postId: '659b4c245a6441788727b01a',
    });
    reset();

    //TODO: scroll 최하단으로
  };
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Avatar
        imageUrl="https://images.velog.io/images/ahsy92/post/d35e77d7-db52-48b2-b0d8-18e847956e4c/image.png"
        size="48px"
      />
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
