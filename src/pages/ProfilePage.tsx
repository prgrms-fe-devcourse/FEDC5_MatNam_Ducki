import styled from '@emotion/styled';
import React, { useState } from 'react';

import BottomNavBar from '@/components/BottomNavBar/BottomNavBar';
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
  margin: 6.4rem 1.96rem;
  width: 36.8rem;
  position: relative;
`;

const Header = styled.div`
  margin: 1.6rem 0;
  font-size: 3.4rem;
  font-weight: bold;
`;

const UserWrapper = styled.div`
  display: flex;
  gap: 3.2rem;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  margin-top: 1.2rem;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  margin-bottom: 1.76rem;
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
          <Header>마이페이지</Header>
          <UserInfoWrapper>
            {isLoading ? (
              <Skeleton
                width="80px"
                height="=70px"
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
      ) : (
        <div>로그인하세요</div>
      )}
      <BottomNavBar></BottomNavBar>
    </>
  );
}
