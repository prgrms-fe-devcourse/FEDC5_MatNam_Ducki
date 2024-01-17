import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import AnimationContainer from '@/components/Common/AnimationContainer';
import Button from '@/components/Common/Button/Button';
import ImageUpload from '@/components/Common/ImageUpload';
import PostSelector from '@/components/PostSelector';
import PostUserProfile from '@/components/PostUserProfile';
import Skeleton from '@/components/Skeleton';
import UserInfo from '@/components/UserInfo';
import UserIntroductionEditor from '@/components/UserIntroductionEditor';
import { DEFAULT_PROFILE_IMAGE } from '@/constants/profile';
import {
  DONE_BUTTON_TEXT,
  EDIT_BUTTON_TEXT,
  PLACEHOLDER_DEFAULTS,
} from '@/constants/profile';
import { useCheckAuthUser } from '@/hooks/useAuth';
import { useSignOut } from '@/hooks/useAuth';
import { useChangeIntroduce } from '@/hooks/useGetProfile';
import { useChangeImage } from '@/hooks/useGetProfile';
import { selectedFileAtom } from '@/recoil/selectedFile';
import { userAtom } from '@/recoil/user';
import { theme } from '@/styles/Theme';
import { Toast } from '@/utils/toast';

import {
  ImageWrapper,
  Label,
  ProfileBackGroundImage,
  ProfileInfo,
  ProfileWrapper,
  UserInfoWrapper,
  UserWrapper,
} from './style';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [introduction, setIntroduction] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const setSelectedFile = useSetRecoilState(selectedFileAtom);
  const { changeImage } = useChangeImage(setIsLoading, setSelectedFile);
  const { data: authUser } = useCheckAuthUser();
  const params = useParams();
  const userId = params.userId;
  const navigate = useNavigate();
  const { changeIntroduce } = useChangeIntroduce();

  const setUserState = useSetRecoilState(userAtom);

  const { mutate: signOut } = useSignOut({ setUserState });

  useEffect(() => {
    if (authUser) {
      setIntroduction(authUser.username || '');
    }
  }, [authUser]);

  useEffect(() => {
    if (userId === 'undefined') {
      Toast.info('로그인이 필요합니다.');
      navigate('/signIn');
    }
  }, [userId]);

  const handleFileChange = (file: File | null) => {
    if (file) {
      changeImage(file, false);
    }
  };

  const handleEditButtonClick = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEditing((prevIsEditing) => !prevIsEditing);

    if (authUser) {
      changeIntroduce({ fullName: authUser.fullName, username: introduction });
    }
  };

  const handleLogOutButtonClick = () => {
    const confirm = window.confirm('로그아웃 하시겠습니까?');
    if (confirm) {
      signOut();
      navigate('/');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 17) {
      setIntroduction(e.target.value);
    } else {
      Toast.info('작성 범위를 초과했습니다.');

      if (authUser) {
        // 범위를 넘기면 alert 발생하면서 초기값으로 돌아가게 되어서 일단은 서버쪽에 보내는 쪽으로 저장하도록했습니다.
        changeIntroduce({
          fullName: authUser.fullName,
          username: introduction,
        });
      }
    }
  };

  const placeholderText =
    introduction === '' ? PLACEHOLDER_DEFAULTS : introduction;

  const buttonText = isEditing ? DONE_BUTTON_TEXT : EDIT_BUTTON_TEXT;

  const defaultImage = DEFAULT_PROFILE_IMAGE;

  return (
    <AnimationContainer>
      <>
        {authUser && authUser._id === userId ? (
          <ProfileWrapper>
            <ProfileBackGroundImage>
              <UserInfoWrapper>
                <ProfileInfo>
                  <ImageWrapper>
                    {isLoading ? (
                      <Skeleton
                        width="80px"
                        height="80px"
                        borderRadius="50%"></Skeleton>
                    ) : (
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
                    )}
                  </ImageWrapper>
                  <UserInfo
                    userName={authUser.fullName}
                    userId={authUser.email}
                  />
                </ProfileInfo>
                <Button
                  onClick={handleLogOutButtonClick}
                  width="6rem"
                  backgroundColor={theme.colors.lightGray}
                  height="3rem"
                  textColor={theme.colors.gray}
                  borderRadius="2rem">
                  로그아웃
                </Button>
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
            </UserWrapper>
            <PostSelector />
          </ProfileWrapper>
        ) : (
          <PostUserProfile />
        )}
      </>
    </AnimationContainer>
  );
}
