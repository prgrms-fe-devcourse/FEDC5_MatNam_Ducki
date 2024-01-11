import styled from '@emotion/styled';
import { useState } from 'react';

import LikePosts from '../LikePosts/LikePosts';
import MyPosts from '../MyPosts/MyPosts';

const SelectorWrapper = styled.div`
  text-align: center;
  margin-top: 3rem;
  display: flex;
  width: 33.2rem;
  border-radius: 1rem;
  height: 4rem;
  align-items: center;
  gap: 0.5rem;
`;

const Ball = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  background-color: black;
  border-radius: 50%;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const MyPostsTitle = styled.div<{ isLikesSelected: boolean }>`
  font-size: ${({ isLikesSelected }) => (isLikesSelected ? '1.95rem' : '2rem')};
  color: ${({ isLikesSelected }) => (isLikesSelected ? '#868686' : 'black')};
  font-weight: ${({ isLikesSelected }) =>
    isLikesSelected ? 'normal' : 'bold'};
`;

const LikesTitle = styled.div<{ isLikesSelected: boolean }>`
  font-size: ${({ isLikesSelected }) => (isLikesSelected ? '2rem' : '1.95rem')};
  color: ${({ isLikesSelected }) => (isLikesSelected ? 'black' : '#868686')};
  font-weight: ${({ isLikesSelected }) =>
    isLikesSelected ? 'bold' : 'normal'};
`;

export default function PostSelector() {
  const [isLikesSelected, setIsLikesSelected] = useState(false);
  return (
    <>
      <SelectorWrapper>
        <MyPostsTitle
          isLikesSelected={isLikesSelected}
          onClick={() => setIsLikesSelected(false)}>
          내 포스트
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
