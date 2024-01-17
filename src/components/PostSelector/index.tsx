import { useState } from 'react';

import LikePosts from '../LikePosts';
import MyPosts from '../MyPosts';
import { Ball, LikesTitle, MyPostsTitle, SelectorWrapper } from './style';

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
        <Ball></Ball>
        <LikesTitle
          isLikesSelected={isLikesSelected}
          onClick={() => setIsLikesSelected(true)}>
          좋아요
        </LikesTitle>
      </SelectorWrapper>
      {isLikesSelected ? <LikePosts /> : <MyPosts />}
    </>
  );
}
