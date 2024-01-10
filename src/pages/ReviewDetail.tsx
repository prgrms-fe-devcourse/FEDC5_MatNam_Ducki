import styled from '@emotion/styled';

import BottomNavBar from '@/components/BottomNavBar/BottomNavBar';
import Avatar from '@/components/Common/Avatar/Avatar';
import Badge from '@/components/Common/Badge';
import { ReviewCard } from '@/components/ReviewCard/ReviewCard';
import CommentInput from '@/components/ReviewDetail/CommentInput';
import EvaluationSection from '@/components/ReviewDetail/EvaluationSection';
import { useGetDetail } from '@/hooks/ReviewDetail';
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

export default function ReviewDetail() {
  const { data, isLoading } = useGetDetail({
    postId: '659b4c245a6441788727b01a',
  });
  // TODO: postId url 파라미터값 사용으로 변경

  if (!isLoading && data) {
    return (
      <ReviewDetailPage>
        <UserInfoWrapper>
          <Avatar imageUrl={data.author.image!} size="68px" />
          <UserInfoTextBox>
            <UserName>{data.author.fullName}</UserName>
            <UserMail>{data.author.email}</UserMail>
          </UserInfoTextBox>
        </UserInfoWrapper>
        <BadgeWrapper>
          <Badge
            label={data.channel.name!}
            color={theme.colors.lightSecondary}
          />
        </BadgeWrapper>
        <ReviewCard
          content="dfsd"
          profileImage="https://images.velog.io/images/ahsy92/post/d35e77d7-db52-48b2-b0d8-18e847956e4c/image.png"
          profileName="sangmin"
          imageUrl="https://images.velog.io/images/ahsy92/post/d35e77d7-db52-48b2-b0d8-18e847956e4c/image.png"
        />
        <EvaluationSection />
        <CommentList>
          {data.comments.map((comment) => (
            <CommentBox key={comment._id}>
              <CommentUserInfoWrapper>
                <Avatar imageUrl={comment.author.image!} size="38px" />
                <CommentUserName>{comment.author.fullName}</CommentUserName>
              </CommentUserInfoWrapper>
              <Comment>{comment.comment}</Comment>
            </CommentBox>
          ))}
        </CommentList>
        <CommentInput />
        <BottomNavBar />
      </ReviewDetailPage>
    );
  }
}
