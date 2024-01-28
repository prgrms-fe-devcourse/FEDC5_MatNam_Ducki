import { PropsUserInfo } from '@/types/profile';

import FollowButton from '../FollowButton';
import { UserId, UserInfoSection, UserName } from './style';

export default function UserInfo({
  userName,
  userId,
  followers,
}: PropsUserInfo) {
  return (
    <UserInfoSection>
      <UserName>{userName}</UserName>
      <UserId>{userId}</UserId>
      <FollowButton userId={userId} followers={followers}></FollowButton>
    </UserInfoSection>
  );
}
