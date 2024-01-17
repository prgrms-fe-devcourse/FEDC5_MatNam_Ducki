import { useParams } from 'react-router-dom';

import UserInfo from '@/components/UserInfo/UserInfo';
import { useGetUser } from '@/hooks/useGetProfile';

import Avatar from '../Common/Avatar';
import UserPosts from '../UserPosts';
import {
  Introduction,
  IntroductionBar,
  IntroductionWrapper,
  Label,
  PostsTitle,
  PostWrapper,
  ProfileBackGroundImage,
  ProfileWrapper,
  UserInfoWrapper,
  UserProfile,
  UserWrapper,
} from './style';

export default function PostUserProfile() {
  const { userId } = useParams() as { userId: string };
  if (userId === 'undefined') {
    return;
  }

  const { data: user } = useGetUser(userId);

  return (
    <>
      {user && (
        <ProfileWrapper>
          <ProfileBackGroundImage>
            <UserInfoWrapper>
              <UserProfile>
                <Avatar
                  imageUrl={user.image}
                  size={'large'}
                  style={{
                    boxShadow: '0 10px 10px rgba(255, 232, 61, 0.29)',
                  }}
                />
                <UserInfo userName={user.fullName} userId={user.email} />
              </UserProfile>
            </UserInfoWrapper>
          </ProfileBackGroundImage>
          <UserWrapper>
            <Label>자기소개</Label>
            <IntroductionWrapper>
              <Introduction>{user.username}</Introduction>
              <IntroductionBar />
            </IntroductionWrapper>
            <PostWrapper>
              <PostsTitle>{user.fullName}님이 작성한 게시글</PostsTitle>
              <UserPosts userId={user._id} />
            </PostWrapper>
          </UserWrapper>
        </ProfileWrapper>
      )}
    </>
  );
}
