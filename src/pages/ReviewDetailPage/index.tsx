import { useParams } from 'react-router-dom';

import BottomNavBar from '@/components/BottomNavBar/BottomNavBar';
import Avatar from '@/components/Common/Avatar/Avatar';
import Badge from '@/components/Common/Badge';
import { ReviewCard } from '@/components/ReviewCard/ReviewCard';
import CommentInput from '@/components/ReviewDetail/CommentInput';
import EvaluationSection from '@/components/ReviewDetail/EvaluationSection';
import { useGetDetail } from '@/hooks/ReviewDetail';
import { theme } from '@/styles/Theme';

import {
  BadgeWrapper,
  Comment,
  CommentBox,
  CommentList,
  CommentUserInfoWrapper,
  CommentUserName,
  ReviewDetailPage,
  UserInfoTextBox,
  UserInfoWrapper,
  UserMail,
  UserName,
} from './style';

export default function ReviewDetail() {
  const { postId } = useParams() as { postId: string };
  const { data, isLoading } = useGetDetail({ postId });

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
