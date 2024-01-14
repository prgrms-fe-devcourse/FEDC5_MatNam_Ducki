import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Badge } from '@/components/Badge/Badge';
import BottomNavBar from '@/components/BottomNavBar/BottomNavBar';
import Avatar from '@/components/Common/Avatar/Avatar';
import DropDownContainer from '@/components/Common/DropDown';
import CommentInput from '@/components/ReviewDetail/CommentInput';
import EvaluationSection from '@/components/ReviewDetail/EvaluationSection';
import { useGetDetail } from '@/hooks/ReviewDetail';
import { useDeletePost } from '@/hooks/useDeletePost';
import { PATH } from '@/routes/path';

import {
  BadgeWrapper,
  Comment,
  CommentBox,
  CommentList,
  CommentUserInfoWrapper,
  CommentUserName,
  ReviewDetailPage,
  ReviewImage,
  ReviewRestaurant,
  ReviewWrapper,
  UserInfoTextBox,
  UserInfoWrapper,
  UserMail,
  UserName,
} from './style';

export default function ReviewDetail() {
  const navigate = useNavigate();

  const { postId } = useParams() as { postId: string };
  const { data, isLoading } = useGetDetail({ postId });

  const { mutate: deletePost } = useDeletePost();

  const handleGoToEditPage = useCallback(() => {
    navigate(PATH.REVIEWUPDATE, { state: postId });
  }, [navigate, postId]);

  const handleDeletePost = useCallback(() => {
    deletePost(postId ?? '');
    navigate('/');
  }, [deletePost, navigate, postId]);

  const dropDownItems = [
    {
      name: '수정',
      onClick: () => handleGoToEditPage(),
    },
    {
      name: '삭제',
      onClick: () => handleDeletePost(),
    },
  ];

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
          <Badge>{data.channel.name}</Badge>
        </BadgeWrapper>
        <ReviewWrapper>
          <ReviewRestaurant>
            <span>{data.restaurant}</span>
            <DropDownContainer items={dropDownItems} />
          </ReviewRestaurant>
          <div>{data.location}</div>
          <div>{data.openingTime}</div>
          <ReviewImage src={data.image}></ReviewImage>
          <div>{data.review}</div>
        </ReviewWrapper>
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
