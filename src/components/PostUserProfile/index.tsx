import { useParams } from 'react-router-dom';

import UserInfo from '@/components/UserInfo/UserInfo';
import { useGetUser } from '@/hooks/useGetProfile';

import Avatar from '../Common/Avatar/Avatar';
import UserPosts from '../UserPosts';
import {
  ImageWrapper,
  Introduction,
  IntroductionBar,
  IntroductionWrapper,
  Label,
  PostsTitle,
  ProfileBackGroundImage,
  ProfileTopWrapper,
  ProfileWrapper,
  SelectorWrapper,
  UserInfoWrapper,
  UserWrapper,
} from './style';

export default function PostUserProfile() {
  const { userId } = useParams() as { userId: string };
  const { data: user } = useGetUser(userId);

  return (
    <>
      {user && (
        <ProfileWrapper>
          <ProfileTopWrapper>
            <ProfileBackGroundImage>
              <UserInfoWrapper>
                <ImageWrapper>
                  <Avatar imageUrl={user.image} size="80px" />
                </ImageWrapper>
                <UserInfo userName={user.fullName} userId={user.email} />
              </UserInfoWrapper>
            </ProfileBackGroundImage>
          </ProfileTopWrapper>
          <UserWrapper>
            <Label>자기소개</Label>
            <IntroductionWrapper>
              <Introduction>만나서 반갑습니다.</Introduction>
              <IntroductionBar />
            </IntroductionWrapper>
            <SelectorWrapper>
              <PostsTitle>{user.fullName}님이 작성한 게시글</PostsTitle>
            </SelectorWrapper>
            <UserPosts
              userPost={user.posts}
              userImage={user.image}
              userName={user.fullName}
            />
          </UserWrapper>
        </ProfileWrapper>
      )}
    </>
  );
}
