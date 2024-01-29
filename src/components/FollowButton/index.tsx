import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { useCreateFollow, useDeleteFollow } from '@/hooks/useFolllow';
import { userAtom } from '@/recoil/user';

import { Button } from './style.ts';

export default function FollowButton(props: any) {
  const [isMe, setIsMe] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const user = useRecoilValue(userAtom);

  const follower = props.followers.filter(
    (follower: any) => follower.user === props.userId,
  );

  const { mutate: createFollowMutate } = useCreateFollow({
    userId: props.userId,
  });

  const { mutate: deleteFollowMutate } = useDeleteFollow();

  useEffect(() => {
    if (props.userId == user?.email) setIsMe(true);
    if (follower.length > 0) setIsFollowing(true);
  }, []);

  const viewFriends = () => {};

  const follow = () => {
    createFollowMutate(props.userId);
    setIsFollowing(true);
  };

  const unfollow = () => {
    deleteFollowMutate(follower[0]._id);
    setIsFollowing(false);
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
