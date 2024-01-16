import { useMutation } from '@tanstack/react-query';

import { sendNotifications } from '@/services/User/notification';

export const useSendNotification = () => {
  return useMutation({
    mutationFn: sendNotifications,
  });
};
