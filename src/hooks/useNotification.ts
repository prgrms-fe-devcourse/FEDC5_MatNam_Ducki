import { useMutation, useQuery } from '@tanstack/react-query';

import {
  getNotifications,
  seenNotifications,
  sendNotifications,
} from '@/services/User/notification';

const notificationKeys = {
  all: ['notifications'] as const,
};

export const useGetNotifications = () => {
  // token에 있는 user의 notifications을 가져오도록 구현해야함...
  return useQuery({
    queryKey: notificationKeys.all,
    queryFn: getNotifications,
  });
};

export const useSeenNotifications = () => {
  return useMutation(seenNotifications);
};

export const useSendNotifications = () => {
  return useMutation(sendNotifications);
};
