import { useMutation } from '@tanstack/react-query';

import { ACCESS_TOKEN_KEY } from '@/constants/api';
import { signIn, signUp } from '@/services/Auth/auth';

interface AuthProps {
  onSuccess?: () => void;
}

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
