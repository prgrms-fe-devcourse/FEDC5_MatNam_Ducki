import { useEffect, useState } from 'react';

import { Button } from './style.ts';

export default function FollowButton() {
  const [isMe, setIsMe] = useState(true);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    setIsMe(false);
    setIsFollowing(false);
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
