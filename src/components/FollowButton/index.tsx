import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { useCreateFollow } from '@/hooks/useFolllow';
import { userAtom } from '@/recoil/user';

import { Button } from './style.ts';

export default function FollowButton(props: any) {
  const [isMe, setIsMe] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const user = useRecoilValue(userAtom);

  const { mutate: createFollowMutate } = useCreateFollow({
    userId: props.userId,
  });

  useEffect(() => {
    if (props.userId == user?.email) setIsMe(true);
    const follower = props.followers.filter(
      (follower: any) => follower.user === props.userId,
    );
    if (follower.length > 0) setIsFollowing(true);
  }, []);

  const viewFriends = () => {};

  const unfollow = () => {
    setIsFollowing(false);
  };

  const follow = () => {
    createFollowMutate(props.userId);
    setIsFollowing(true);
  };

  let followText = '';
  let handleOnClick = () => {};

  if (isMe) {
    followText = '친구 목록 보기';
    handleOnClick = viewFriends;
  } else if (isFollowing) {
    followText = '친구 끊기';
    handleOnClick = unfollow;
  } else {
    followText = '친구 맺기';
    handleOnClick = follow;
  }

  return (
    <Button isMe={isMe} isFollowing={isFollowing} onClick={handleOnClick}>
      {followText}
    </Button>
  );
}
