import { DEFAULT_PROFILE_IMAGE } from '@/constants/profile';
import { User } from '@/types/response';

import {
  UserInfoWrapper,
  UserName,
  UserOnlineIcon,
  UserOnlineIconWrapper,
  UserProfileImage,
  UserProfileWrapper,
} from './style';

interface UserProfileInfoProps {
  user: User;
}

export default function UserProfileInfo({ user }: UserProfileInfoProps) {
  return (
    <UserInfoWrapper>
      <UserProfileWrapper>
        <UserProfileImage src={user.image ?? DEFAULT_PROFILE_IMAGE} />
        <UserOnlineIconWrapper>
          <UserOnlineIcon active={user.isOnline.toString()} />
        </UserOnlineIconWrapper>
      </UserProfileWrapper>
      <UserName>{user.fullName}</UserName>
    </UserInfoWrapper>
  );
}
