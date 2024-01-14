import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ImageUpload from '@/components/Common/ImageUpload';
import PostSelector from '@/components/PostSelector';
import PostUserProfile from '@/components/PostUserProfile';
import Skeleton from '@/components/Skeleton';
import UserInfo from '@/components/UserInfo';
import UserIntroductionEditor from '@/components/UserIntroductionEditor';
import {
  DONE_BUTTON_TEXT,
  EDIT_BUTTON_TEXT,
  PLACEHOLDER_DEFAULTS,
} from '@/constants/profile';
import { useCheckAuthUser } from '@/hooks/useAuth';
import { useChangeImage } from '@/hooks/useGetProfile';

import {
  ImageWrapper,
  Label,
  ProfileBackGroundImage,
  ProfileWrapper,
  UserInfoWrapper,
  UserWrapper,
} from './style';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [introduction, setIntroduction] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { changeImage } = useChangeImage(setIsLoading);
  const { data: authUser } = useCheckAuthUser();
  const params = useParams();
  const userId = params.userId;
  const navigate = useNavigate();

  useEffect(() => {
    if (userId === 'undefined') {
      alert('로그인이 필요합니다.');
      navigate('/signIn');
    }
  }, [userId]);

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
    if (e.target.value.length < 17) {
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
      <>
        {authUser && authUser._id === userId ? (
          <ProfileWrapper>
            <ProfileBackGroundImage>
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
                        authUser.image
                          ? `${authUser.image}?${Date.now()}`
                          : defaultImage // 초기 값
                      }
                    />
                  </ImageWrapper>
                )}
                <UserInfo
                  userName={authUser.fullName}
                  userId={authUser.email}
                />
              </UserInfoWrapper>
            </ProfileBackGroundImage>
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
          <PostUserProfile />
        )}
      </>
    </>
  );
}
