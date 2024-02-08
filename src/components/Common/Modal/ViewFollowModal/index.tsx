import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import Avatar from '@/components/Common/Avatar';
import { DEFAULT_PROFILE_IMAGE } from '@/constants/profile';
import { userAtom } from '@/recoil/user';
import { getUserDetailsById } from '@/services/Follow/follow';

import {
  FollowButton,
  FollowButtonWrapper,
  UserList,
  UserListItem,
  UserName,
  ViewFollowWrapper,
} from './style';

export default function ViewFollowModal() {
  const user = useRecoilValue(userAtom);
  const [activeList, setActiveList] = useState('팔로잉');
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    async function fetchUserDetails(ids: string[]) {
      const details = await Promise.all(
        ids.map((id: string) => getUserDetailsById(id)),
      );
      setUserDetails(details);
    }

    const ids =
      activeList === '팔로잉'
        ? user?.following.map((following) => following.user)
        : user?.followers.map((follower) => follower.follower);

    if (ids) fetchUserDetails(ids);
  }, [activeList, user]);

  return (
    <ViewFollowWrapper>
      <FollowButtonWrapper>
        {['팔로잉', '팔로워'].map((list) => (
          <FollowButton
            key={list}
            active={activeList === list}
            onClick={() => setActiveList(list)}>
            {list}
          </FollowButton>
        ))}
      </FollowButtonWrapper>
      <UserList>
        {userDetails.map((detail, index) => (
          <UserListItem key={index}>
            <Avatar
              imageUrl={detail.image || DEFAULT_PROFILE_IMAGE}
              size="small"
            />
            <UserName>{detail.fullName}</UserName>
          </UserListItem>
        ))}
      </UserList>
    </ViewFollowWrapper>
  );
}
