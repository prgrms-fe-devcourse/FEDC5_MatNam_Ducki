import styled from '@emotion/styled';
import { useState } from 'react';

import { LEFT_BUTTON_TEXT, RIGHT_BUTTON_TEXT } from '@/constants/profile';

import LikePosts from '../LikePosts/LikePosts';
import MyPosts from '../MyPosts/MyPosts';

const SelectorWrapper = styled.div`
  height: 100px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 340px;
  border-radius: 10px;
  margin-top: 10px;
`;

const Button = styled.button`
  flex: 1;
  background-color: #e4e1e1;
  border: 1px solid #ccc;
  height: 100px;
`;

const LeftButton = styled(Button)`
  border-radius: 10px 0 0 10px;
`;

const RightButton = styled(Button)`
  border-radius: 0 10px 10px 0;
`;

export default function PostSelector() {
  const [showLikes, setShowLikes] = useState<boolean>(false);
  return (
    <>
      <SelectorWrapper>
        <LeftButton onClick={() => setShowLikes(false)}>
          {LEFT_BUTTON_TEXT}
        </LeftButton>
        <RightButton onClick={() => setShowLikes(true)}>
          {RIGHT_BUTTON_TEXT}
        </RightButton>
      </SelectorWrapper>
      {showLikes ? <LikePosts /> : <MyPosts />}
    </>
  );
}
