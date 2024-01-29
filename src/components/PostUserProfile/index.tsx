import { useParams } from 'react-router-dom';

import UserInfo from '@/components/UserInfo';
import { useGetUser } from '@/hooks/useGetProfile';

import Avatar from '../Common/Avatar';
import UserPosts from '../UserPosts';
import {
  Introduction,
  IntroductionBar,
  IntroductionContainer,
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
                    marginLeft: '2rem',
                    boxShadow: '0 10px 10px rgba(255, 232, 61, 0.29)',
                  }}
                />
                <UserInfo
                  userName={user.fullName}
                  userId={user._id}
                  userEmail={user.email}
                  followers={user.followers}
                />
              </UserProfile>
            </UserInfoWrapper>
          </ProfileBackGroundImage>
          <UserWrapper>
            {user.username && (
              <>
                <IntroductionContainer>
                  <Label>자기소개</Label>
                  <IntroductionWrapper>
                    <Introduction>{user.username}</Introduction>
                    <IntroductionBar />
                  </IntroductionWrapper>
                </IntroductionContainer>
              </>
            )}
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
