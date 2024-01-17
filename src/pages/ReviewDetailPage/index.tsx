import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { Badge } from '@/components/Badge/Badge';
import BottomNavBar from '@/components/BottomNavBar';
import Avatar from '@/components/Common/Avatar';
import DropDownContainer from '@/components/Common/DropDown';
import ClockIcon from '@/components/Common/Icons/ClockIcon';
import ThumbsDownIcon from '@/components/Common/Icons/ThumbsDownIcon';
import ThumbsUpIcon from '@/components/Common/Icons/ThumbsUpIcon';
import CommentInput from '@/components/ReviewDetail/CommentInput';
import EvaluationSection from '@/components/ReviewDetail/EvaluationSection';
import { CHANNEL } from '@/constants/channel';
import { useGetDetail } from '@/hooks/ReviewDetail';
import { useDeletePost } from '@/hooks/useDeletePost';
import { useRedirectToProfile } from '@/hooks/useRedirectProfile';
import { userAtom } from '@/recoil/user';
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
  const user = useRecoilValue(userAtom);

  const { postId } = useParams() as { postId: string };

  const { data, isLoading } = useGetDetail({ postId });

  const { mutate: deletePost } = useDeletePost();
  const redirectToProfile = useRedirectToProfile();

  const handleGoToEditPage = useCallback(() => {
    navigate(`${PATH.REVIEWUPDATE}/${postId}`);
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
        <UserInfoWrapper onClick={() => redirectToProfile(data.author._id)}>
          <Avatar imageUrl={data.author.image!} size="large" />
          <UserInfoTextBox>
            <UserName>{data.author.fullName}</UserName>
            <UserMail>{data.author.email}</UserMail>
          </UserInfoTextBox>
        </UserInfoWrapper>
        <BadgeWrapper>
          <Badge variant={data.channel._id === CHANNEL.LIKE ? 'focus' : 'blur'}>
            {data.channel.name}
          </Badge>
        </BadgeWrapper>
        <ReviewWrapper>
          <ReviewHeaderWrapper>
            <ReviewHeaderTitleWrapper>
              <ReviewHeaderLeft>
                <RestaurantName>{data.restaurant}</RestaurantName>
                {data.channel._id === CHANNEL.LIKE ? (
                  <ThumbsUpIcon />
                ) : (
                  <ThumbsDownIcon />
                )}
              </ReviewHeaderLeft>
              {user?.posts.some((post) => post._id === postId) && (
                <DropDownContainer items={dropDownItems} />
              )}
            </ReviewHeaderTitleWrapper>
            <RestaurantLocation>{data.location}</RestaurantLocation>
          </ReviewHeaderWrapper>
          {data.openingTime && (
            <OpeningTitle>
              <ClockIcon />
              영업시간
            </OpeningTitle>
          )}
          {data.openingTime && (
            <RestaurantOpeningTime>{data.openingTime}</RestaurantOpeningTime>
          )}
          {data.image && <ReviewImage src={data.image}></ReviewImage>}
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
