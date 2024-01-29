import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { useCreateFollow } from '@/hooks/useFolllow';
import { userAtom } from '@/recoil/user';

import { Button } from './style.ts';

export default function FollowButton(props: any) {
  const [isMe, setIsMe] = useState(true);
  const [isFollowing, setIsFollowing] = useState(false);
  const user = useRecoilValue(userAtom);

  const { mutate: createFollowMutate } = useCreateFollow({
    userId: props.userId,
  });

  useEffect(() => {
    props.userId == user?.email ? setIsMe(true) : setIsMe(false);
    const follower = props.followers.filter(
      (follower: any) => follower.user === props.userId,
    );
    if (follower.length > 0) setIsFollowing(true);
  }, []);

  const viewFriends = () => {
    console.log('친구 목록 보기');
  };

  const unfollow = () => {
    console.log('친구 끊기');
    setIsFollowing(false);
  };

  const follow = () => {
    console.log('친구 맺기');
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
