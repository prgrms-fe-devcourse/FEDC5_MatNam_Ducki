import { useState } from 'react';

import Circle from '../Common/Circle';
import LikePosts from '../LikePosts';
import MyPosts from '../MyPosts';
import {
  LikesTitle,
  MyPostsTitle,
  MyPostWrapper,
  SelectorWrapper,
} from './style';

export default function PostSelector() {
  const [isLikesSelected, setIsLikesSelected] = useState(false);
  return (
    <>
      <MyPostWrapper>
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
            좋아요
          </LikesTitle>
        </SelectorWrapper>
        {isLikesSelected ? <LikePosts /> : <MyPosts />}
      </MyPostWrapper>
    </>
  );
}
