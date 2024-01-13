import { useQuery, useQueryClient } from '@tanstack/react-query';

import { ACCESS_TOKEN_KEY } from '@/constants/api';
import { getUsers } from '@/services/User/user';
import { User } from '@/types/response';

export const userKeys = {
  user: ['user'] as const,
};

export const useGetUsers = (offset = 0, limit = 10) => {
  return useQuery([userKeys.user, offset, limit], () =>
    getUsers({ offset, limit }),
  );
};

export const useUser = () => {
  const queryClient = useQueryClient();

  const { data: user } = useGetUsers();

  const initialUser = (user: User, token: string) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
    queryClient.setQueryData(userKeys.user, user);
  };

  const clearUser = () => {
    queryClient.removeQueries(['notifications']);
    queryClient.setQueryData(userKeys.user, null);
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  };

  return { user, clearUser, initialUser };
};
