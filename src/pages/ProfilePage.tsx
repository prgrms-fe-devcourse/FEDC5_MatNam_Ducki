import styled from '@emotion/styled';
import React, { useState } from 'react';

import BottomNavBar from '@/components/BottomNavBar/BottomNavBar';
import PostSelector from '@/components/PostSelector/PostSelector';
import ProfileImage from '@/components/ProfileImage/ProfileImage';
import UserInfo from '@/components/UserInfo/UserInfo';
import UserIntroductionEditor from '@/components/UserIntroductionEditor/UserIntroductionEditor';
import {
  DONE_BUTTON_TEXT,
  EDIT_BUTTON_TEXT,
  PLACEHOLDER_DEFAULTS,
} from '@/constants/profile';

const ProfileWrapper = styled.div`
  margin: 20px;
  width: 320px;
  position: relative;
`;

const Header = styled.div`
  margin: 20px 0;
  font-size: 30px;
  font-weight: bold;
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [introduction, setIntroduction] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (file: File | null) => {
    setSelectedFile(file);
  };

  const handleEditButtonClick = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 61) {
      setIntroduction(e.target.value);
    } else {
      alert('작성 범위를 초과했습니다.');
    }
  };

  const placeholderText: string =
    introduction === '' ? PLACEHOLDER_DEFAULTS : introduction;

  const buttonText: string = isEditing ? DONE_BUTTON_TEXT : EDIT_BUTTON_TEXT;

  return (
    <>
      <ProfileWrapper>
        <Header>마이페이지</Header>
        <ProfileImage onFileChange={handleFileChange} />
        <UserWrapper>
          <UserInfo userName="러비더비" userId="ducki" />
          <UserIntroductionEditor
            isEditing={isEditing}
            onEditButtonClick={handleEditButtonClick}
            placeholderText={placeholderText}
            onFormSubmit={handleFormSubmit}
            introduction={introduction}
            onInputChange={handleInputChange}
            buttonText={buttonText}
          />
          <PostSelector></PostSelector>
        </UserWrapper>
      </ProfileWrapper>
      <BottomNavBar></BottomNavBar>
    </>
  );
}
