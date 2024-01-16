import { PropsUserInfo } from '@/types/profile';

import { UserId, UserInfoSection, UserName } from './style';

export default function UserInfo({ userName, userId }: PropsUserInfo) {
  return (
    <UserInfoSection>
      <UserName>{userName}</UserName>
      <UserId>{userId}</UserId>
    </UserInfoSection>
  );
}
