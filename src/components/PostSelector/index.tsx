import { useState } from 'react';

import Circle from '../Common/Circle';
import LikePosts from '../LikePosts';
import MyPosts from '../MyPosts';
import { LikesTitle, MyPostsTitle, SelectorWrapper } from './style';

export default function PostSelector() {
  const [isLikesSelected, setIsLikesSelected] = useState(false);
  return (
    <>
      <SelectorWrapper>
        <MyPostsTitle
          isLikesSelected={isLikesSelected}
          onClick={() => setIsLikesSelected(false)}>
          나의 포스트
        </MyPostsTitle>
        <Circle />
        <LikesTitle
          isLikesSelected={isLikesSelected}
          onClick={() => setIsLikesSelected(true)}>
          좋았어요
        </LikesTitle>
      </SelectorWrapper>
      {isLikesSelected ? <LikePosts /> : <MyPosts />}
    </>
  );
}
