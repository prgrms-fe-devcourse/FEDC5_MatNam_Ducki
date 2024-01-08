import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';

import BottomNavBar from '@/components/BottomNavBar/BottomNavBar';
import Avatar from '@/components/Common/Avatar/Avatar';
import Badge from '@/components/Common/Badge';
import HookFormInput from '@/components/Common/HookFormInput';
import { ReviewCard } from '@/components/ReviewCard/ReviewCard';
import { theme } from '@/styles/Theme';

const ReviewDetailPage = styled.div`
  --mobile-width: 450px;

  margin: 0 auto;
  width: var(--mobile-width);
  display: flex;
  flex-direction: column;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const UserInfoTextBox = styled.div``;

const UserName = styled.h3``;

const UserMail = styled.span`
  opacity: 0.3;
`;

const BadgeWrapper = styled.div`
  width: 50px;
  margin: 10px 0;
  cursor: pointer;
`;

const EvaluationSection = styled.div`
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

const CommentList = styled.div`
  height: 100%;
  margin-bottom: 108px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
`;

const CommentBox = styled.div`
  padding: 0.625rem;
  border: 2px solid #cccccc;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
  font-size: 17px;
`;

const CommentUserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Comment = styled.p`
  font-weight: ${theme.fontWeight.regular};
`;

const CommentUserName = styled.h3``;

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

export default function ReviewDetail() {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    console.log('dd');
  };
  return (
    <ReviewDetailPage>
      <UserInfoWrapper>
        <Avatar
          imageUrl="https://images.velog.io/images/ahsy92/post/d35e77d7-db52-48b2-b0d8-18e847956e4c/image.png"
          size="68px"
        />
        <UserInfoTextBox>
          <UserName>프롱이</UserName>
          <UserMail>frong555@naver.com</UserMail>
        </UserInfoTextBox>
      </UserInfoWrapper>
      <BadgeWrapper>
        <Badge label="강남" color={`${theme.colors.lightSecondary}`} />
      </BadgeWrapper>
      <ReviewCard
        content="dfsd"
        profileImage="https://images.velog.io/images/ahsy92/post/d35e77d7-db52-48b2-b0d8-18e847956e4c/image.png"
        profileName="sangmin"
        imageUrl="https://images.velog.io/images/ahsy92/post/d35e77d7-db52-48b2-b0d8-18e847956e4c/image.png"
      />
      <EvaluationSection>
        <EvaluationLeftWrapper>
          <LikeText>좋아요 3</LikeText>
          <HateText>싫어요 0</HateText>
        </EvaluationLeftWrapper>
        <EvaluationRightWrapper>
          <LikeBtn>👍</LikeBtn>
          <HateBtn>👎</HateBtn>
        </EvaluationRightWrapper>
      </EvaluationSection>
      <CommentList>
        {Array(10)
          .fill('')
          .map(() => (
            <CommentBox>
              <CommentUserInfoWrapper>
                <Avatar
                  imageUrl="https://images.velog.io/images/ahsy92/post/d35e77d7-db52-48b2-b0d8-18e847956e4c/image.png"
                  size="38px"
                />
                <CommentUserName>또다른프롱이</CommentUserName>
              </CommentUserInfoWrapper>
              <Comment> 여기 텐동 진짜 바삭하더라구요 !!</Comment>
            </CommentBox>
          ))}
        <CommentBox>
          <CommentUserInfoWrapper>
            <Avatar
              imageUrl="https://images.velog.io/images/ahsy92/post/d35e77d7-db52-48b2-b0d8-18e847956e4c/image.png"
              size="38px"
            />
            <CommentUserName>또다른프롱이</CommentUserName>
          </CommentUserInfoWrapper>
          <Comment> 여기 텐동 진짜 바삭하더라구요 !!</Comment>
        </CommentBox>
      </CommentList>
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
      <BottomNavBar />
    </ReviewDetailPage>
  );
}
