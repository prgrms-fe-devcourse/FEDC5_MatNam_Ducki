import { useMutation, useQuery } from '@tanstack/react-query';

import { ACCESS_TOKEN_KEY } from '@/constants/api';
import { checkAuthUser, signIn, signOut, signUp } from '@/services/Auth/auth';

interface AuthProps {
  onSuccess?: () => void;
}

const authKeys = {
  checkAuthUser: ['checkAuthUser'] as const,
};

/**
 * @description useMutation으로 회원가입 API를 호출하는 hook입니다. 성공 시 access token을 로컬 스토리지에 저장합니다.
 * @param onSuccess - optional) 성공 시 수행할 callback 함수를 넘겨줄 때 사용합니다.
 */
export const useSignUp = ({ onSuccess }: AuthProps = {}) => {
  return useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      if (data?.token) {
        localStorage.setItem(ACCESS_TOKEN_KEY, data.token);

        if (onSuccess) {
          onSuccess();
        }
      }
    },
  });
};

/**
 * @description useMutation으로 로그인 API를 호출하는 hook입니다. 성공 시 access token을 로컬 스토리지에 저장합니다.
 * @param onSuccess - optional) 성공 시 수행할 callback 함수를 넘겨줄 때 사용합니다.
 */
export const useSignIn = ({ onSuccess }: AuthProps = {}) => {
  return useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      if (data?.token) {
        localStorage.setItem(ACCESS_TOKEN_KEY, data.token);

        if (onSuccess) {
          onSuccess();
        }
      }
    },
  });
};

/**
 * @description useMutation으로 로그아웃 API를 호출하는 hook입니다. 성공 시 access token을 로컬 스토리지에서 삭제합니다.
 * @param onSuccess - optional) 성공 시 수행할 callback 함수를 넘겨줄 때 사용합니다.
 */
export const useSignOut = ({ onSuccess }: AuthProps = {}) => {
  return useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      localStorage.removeItem(ACCESS_TOKEN_KEY);

      if (onSuccess) {
        onSuccess();
      }
    },
  });
};

/**
 * @description useQuery로 checkAuthUser API를 호출하는 hook입니다. 인증된 사용자인지 확인합니다.
 * @param onSuccess - optional) 성공 시 수행할 callback 함수를 넘겨줄 때 사용합니다.
 * @return 성공 시 User, 실패 시 null을 반환합니다.
 */
export const useCheckAuthUser = ({ onSuccess }: AuthProps = {}) => {
  return useQuery({
    queryKey: authKeys.checkAuthUser,
    queryFn: checkAuthUser,
    onSuccess: () => {
      if (onSuccess) {
        onSuccess();
      }
    },
  });
};
