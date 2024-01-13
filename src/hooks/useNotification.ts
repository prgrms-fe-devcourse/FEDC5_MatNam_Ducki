import { useMutation, useQuery } from '@tanstack/react-query';

import {
  getNotifications,
  seenNotifications,
  sendNotifications,
} from '@/services/User/notification';
import { User } from '@/types/response';

const notificationKeys = {
  all: ['notifications'] as const,
};

export const useGetNotifications = (user: User) => {
  return useQuery({
    queryKey: notificationKeys.all,
    queryFn: getNotifications,
    enabled: !!user,
  });
};

export const useSeenNotifications = () => {
  return useMutation(seenNotifications);
};

export const useSendNotifications = () => {
  return useMutation(sendNotifications);
};
