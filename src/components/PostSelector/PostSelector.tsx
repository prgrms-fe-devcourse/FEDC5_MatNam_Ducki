import styled from '@emotion/styled';
import { useState } from 'react';

import { LEFT_BUTTON_TEXT, RIGHT_BUTTON_TEXT } from '@/constants/profile';

import LikePosts from '../LikePosts/LikePosts';
import MyPosts from '../MyPosts/MyPosts';

const SelectorWrapper = styled.div`
  height: 10rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34rem;
  border-radius: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  flex: 1;
  background-color: #e4e1e1;
  border: 0.1rem solid #ccc;
  height: 10rem;
`;

const LeftButton = styled(Button)`
  border-radius: 1rem 0 0 1rem;
`;

const RightButton = styled(Button)`
  border-radius: 0 1rem 1rem 0;
`;

export default function PostSelector() {
  const [isLikesSelected, setIsLikesSelected] = useState(false);
  return (
    <>
      <SelectorWrapper>
        <LeftButton onClick={() => setIsLikesSelected(false)}>
          {LEFT_BUTTON_TEXT}
        </LeftButton>
        <RightButton onClick={() => setIsLikesSelected(true)}>
          {RIGHT_BUTTON_TEXT}
        </RightButton>
      </SelectorWrapper>
      {isLikesSelected ? <LikePosts /> : <MyPosts />}
    </>
  );
}
