import { DEFAULT_PROFILE_IMAGE } from '@/constants/profile';
import { User } from '@/types/response';
import { getElapsedTime } from '@/utils/getElapsedTime';

import {
  LastSendDateText,
  Message,
  UserInfo,
  UserInfoWrapper,
  UserName,
  UserOnlineIcon,
  UserOnlineIconWrapper,
  UserProfileImage,
  UserProfileWrapper,
} from './style';

interface UserProfileInfoProps {
  user: User;
  message?: string;
  lastSendDate?: string;
}

export default function UserProfileInfo({
  user,
  message,
  lastSendDate,
}: UserProfileInfoProps) {
  return (
    <UserInfoWrapper>
      <UserInfo>
        <UserProfileWrapper>
          <UserProfileImage src={user.image ?? DEFAULT_PROFILE_IMAGE} />
          <UserOnlineIconWrapper>
            <UserOnlineIcon active={user.isOnline.toString()} />
          </UserOnlineIconWrapper>
        </UserProfileWrapper>
        <UserName>{user.fullName}</UserName>
        {message && <Message>{message}</Message>}
      </UserInfo>
      {lastSendDate && (
        <LastSendDateText>{getElapsedTime(lastSendDate)}</LastSendDateText>
      )}
    </UserInfoWrapper>
  );
}
