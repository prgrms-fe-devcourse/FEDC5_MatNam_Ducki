import styled from '@emotion/styled';
import React, { useState } from 'react';

import ImageUpload from '@/components/Common/ImageUpload';
import PostSelector from '@/components/PostSelector/PostSelector';
import Skeleton from '@/components/Skeleton';
import UserInfo from '@/components/UserInfo/UserInfo';
import UserIntroductionEditor from '@/components/UserIntroductionEditor/UserIntroductionEditor';
import {
  DONE_BUTTON_TEXT,
  EDIT_BUTTON_TEXT,
  PLACEHOLDER_DEFAULTS,
} from '@/constants/profile';
import { useCheckAuthUser } from '@/hooks/useAuth';
import { useChangeImage } from '@/hooks/useGetProfile';

const ProfileWrapper = styled.div`
  width: 37.5rem;
  height: 73.2rem;
`;

const Hello = styled.div`
  width: 37.5rem;
  height: 16rem;
`;

const TopBackGroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: pink;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 10rem;
`;

const UserWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  margin: 3rem 2rem 0 2rem;
`;

const ImageWrapper = styled.div`
  margin-top: 1.2rem;
  margin-left: 2.5rem;
`;

const Label = styled.span`
  color: #868686;
  font-size: 1.3rem;
  margin-left: 0.7rem;
`;

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [introduction, setIntroduction] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { changeImage } = useChangeImage(setIsLoading);
  const { data: authUser } = useCheckAuthUser();

  const handleFileChange = (file: File | null) => {
    if (file) {
      changeImage(file);
    }
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

  const defaultImage = '../../public/vite.svg';
  return (
    <>
      {authUser ? (
        <ProfileWrapper>
          <Hello>
            <TopBackGroundImage></TopBackGroundImage>
          </Hello>
          <UserInfoWrapper>
            {isLoading ? (
              <Skeleton
                style={{ marginTop: '1.2rem' }}
                width="80px"
                height="80px"
                borderRadius="50%"></Skeleton>
            ) : (
              <ImageWrapper>
                <ImageUpload
                  onFileChange={handleFileChange}
                  ratio="5/5"
                  width="80px"
                  borderRadius="50%"
                  image={
                    authUser?.image
                      ? `${authUser.image}?${Date.now()}`
                      : defaultImage // 초기 값
                  }
                />
              </ImageWrapper>
            )}
            <UserInfo userName={authUser?.fullName} userId={authUser?.email} />
          </UserInfoWrapper>
          <UserWrapper>
            <Label>자기소개</Label>
            <UserIntroductionEditor
              isEditing={isEditing}
              onEditButtonClick={handleEditButtonClick}
              placeholderText={placeholderText}
              onFormSubmit={handleFormSubmit}
              introduction={introduction}
              onInputChange={handleInputChange}
              buttonText={buttonText}
            />
            <PostSelector />
          </UserWrapper>
        </ProfileWrapper>
      ) : (
        <div>로그인하세요</div>
      )}
    </>
  );
}
