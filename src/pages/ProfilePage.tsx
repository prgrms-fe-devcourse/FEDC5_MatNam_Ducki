import styled from '@emotion/styled';
import React, { useState } from 'react';

import BottomNavBar from '@/components/BottomNavBar/BottomNavBar';
import ImageUpload from '@/components/Common/ImageUpload';
import PostSelector from '@/components/PostSelector/PostSelector';
import UserInfo from '@/components/UserInfo/UserInfo';
import UserIntroductionEditor from '@/components/UserIntroductionEditor/UserIntroductionEditor';
import {
  DONE_BUTTON_TEXT,
  EDIT_BUTTON_TEXT,
  PLACEHOLDER_DEFAULTS,
} from '@/constants/profile';

const ProfileWrapper = styled.div`
  margin: 4rem 1.4rem;
  width: 23rem;
  position: relative;
`;

const Header = styled.div`
  margin: 1rem 0;
  font-size: 2.12rem;
  font-weight: bold;
`;

const UserWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  margin-bottom: 1.1rem;
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

  const placeholderText =
    introduction === '' ? PLACEHOLDER_DEFAULTS : introduction;

  const buttonText = isEditing ? DONE_BUTTON_TEXT : EDIT_BUTTON_TEXT;
  const defaultAvatar = '../../../public/vite.svg';
  return (
    <>
      <ProfileWrapper>
        <Header>마이페이지</Header>
        <UserInfoWrapper>
          <ImageUpload
            onFileChange={handleFileChange}
            ratio="5/5"
            width="60px"
            borderRadius="50%"
            image={defaultAvatar}
          />
          <UserInfo userName="러비더비" userId="ducki" />
        </UserInfoWrapper>
        <UserWrapper>
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
