import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Badge } from '@/components/Badge/Badge';
import BottomNavBar from '@/components/BottomNavBar';
import Avatar from '@/components/Common/Avatar';
import DropDownContainer from '@/components/Common/DropDown';
import ClockIcon from '@/components/Common/Icons/ClockIcon';
import ThumbsUpIcon from '@/components/Common/Icons/ThumbsUpIcon';
import CommentInput from '@/components/ReviewDetail/CommentInput';
import EvaluationSection from '@/components/ReviewDetail/EvaluationSection';
import { useGetDetail } from '@/hooks/ReviewDetail';
import { useDeletePost } from '@/hooks/useDeletePost';
import { useRedirectToProfile } from '@/hooks/useRedirectProfile';
import { PATH } from '@/routes/path';
import { getElapsedTime } from '@/utils/getElapsedTime';

import {
  BadgeWrapper,
  Comment,
  CommentBox,
  CommentCreatedTime,
  CommentList,
  CommentUserInfoWrapper,
  CommentUserName,
  OpeningTitle,
  RestaurantLocation,
  RestaurantName,
  RestaurantOpeningTime,
  ReviewContent,
  ReviewDetailPage,
  ReviewHeaderLeft,
  ReviewHeaderTitleWrapper,
  ReviewHeaderWrapper,
  ReviewImage,
  ReviewWrapper,
  UserInfoTextBox,
  UserInfoWrapper,
  UserMail,
  UserName,
  WriterWrapper,
} from './style';

export default function ReviewDetail() {
  const navigate = useNavigate();

  const { postId } = useParams() as { postId: string };
  const { data, isLoading } = useGetDetail({ postId });

  const { mutate: deletePost } = useDeletePost();
  const redirectToProfile = useRedirectToProfile();

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

  console.log(data?.comments);

  if (!isLoading && data) {
    return (
      <ReviewDetailPage>
        <UserInfoWrapper onClick={() => redirectToProfile(data.author._id)}>
          <Avatar imageUrl={data.author.image!} size="large" />
          <UserInfoTextBox>
            <UserName>{data.author.fullName}</UserName>
            <UserMail>{data.author.email}</UserMail>
          </UserInfoTextBox>
        </UserInfoWrapper>
        <BadgeWrapper>
          <Badge>{data.channel.name}</Badge>
        </BadgeWrapper>
        <ReviewWrapper>
          <ReviewHeaderWrapper>
            <ReviewHeaderTitleWrapper>
              <ReviewHeaderLeft>
                <RestaurantName>{data.restaurant}</RestaurantName>

                {/* TODO: API의 좋았어요, 가지마세요에 맞춰서 수정 */}
                <ThumbsUpIcon />
              </ReviewHeaderLeft>
              <DropDownContainer items={dropDownItems} />
            </ReviewHeaderTitleWrapper>
            <RestaurantLocation>{data.location}</RestaurantLocation>
          </ReviewHeaderWrapper>
          <OpeningTitle>
            <ClockIcon />
            영업시간
          </OpeningTitle>
          <RestaurantOpeningTime>{data.openingTime}</RestaurantOpeningTime>
          <ReviewImage src={data.image}></ReviewImage>
          <ReviewContent>{data.review}</ReviewContent>
        </ReviewWrapper>
        <EvaluationSection />
        <CommentList>
          {data.comments.map((comment) => (
            <CommentBox key={comment._id}>
              <CommentUserInfoWrapper>
                <WriterWrapper
                  onClick={() => redirectToProfile(comment.author._id)}>
                  <Avatar imageUrl={comment.author.image!} size="small" />
                  <CommentUserName>{comment.author.fullName}</CommentUserName>
                </WriterWrapper>
                <CommentCreatedTime>
                  {getElapsedTime(comment.createdAt)}
                </CommentCreatedTime>
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
