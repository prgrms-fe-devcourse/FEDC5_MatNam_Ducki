import { ACCESS_TOKEN_KEY } from '@/constants/api';
import { User } from '@/types';
import { SignInPayload, SignUpPayload } from '@/types/payload';
import { UserReponse } from '@/types/reponse';

import { axiosAuthInstance, axiosInstance } from '../axiosInstance';
import { ENDPOINT } from '../endPoint';

export const signUp = async ({ email, fullName, password }: SignUpPayload) => {
  try {
    const response = await axiosInstance.post<UserReponse>(ENDPOINT.SIGNUP, {
      email,
      fullName,
      password,
    });

    const { token } = response;

    sessionStorage.setItem(ACCESS_TOKEN_KEY, token);
  } catch (error) {
    console.error(error);
  }
};

export const signIn = async ({ email, password }: SignInPayload) => {
  try {
    const response = await axiosInstance.post<UserReponse>(ENDPOINT.SIGNIN, {
      email,
      password,
    });

    const { token } = response;

    sessionStorage.setItem(ACCESS_TOKEN_KEY, token);
  } catch (error) {
    console.error(error);
  }
};

export const signOut = async () => {
  try {
    await axiosAuthInstance.post(ENDPOINT.SIGNOUT);
    sessionStorage.removeItem(ACCESS_TOKEN_KEY);
  } catch (error) {
    console.error(error);
  }
};

/**
 * @description 인증된 사용자인지 확인합니다.
 * @return 실패할 경우 null을 반환합니다.
 */
export const checkAuthUser = async () => {
  try {
    const response = await axiosAuthInstance.get<User>(ENDPOINT.AUTH_USER);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
