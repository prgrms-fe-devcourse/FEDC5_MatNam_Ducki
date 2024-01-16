import { useMutation, useQuery } from '@tanstack/react-query';

import {
  createMessage,
  getAllConversations,
  getUserMessages,
  updateMessageSeen,
} from '@/services/DirectMessage/conversation';

const searchKeys = {
  conversation: ['conversations'] as const,
  userMessages: (userId: string) => ['userMessages', userId],
  createMessage: ['createMessage'] as const,
  seenMessage: ['seenMessage'] as const,
};

export const useGetAllConversations = () => {
  return useQuery({
    queryKey: searchKeys.conversation,
    queryFn: getAllConversations,
  });
};

export const useGetUserMessages = (userId: string) => {
  return useQuery({
    queryKey: searchKeys.userMessages(userId),
    queryFn: () => getUserMessages(userId),
    enabled: !!userId,
  });
};

export const useCreateMessage = () => {
  return useMutation({
    mutationFn: createMessage,
  });
};

export const useUpdateMessageSeen = () => {
  return useMutation({
    mutationFn: updateMessageSeen,
  });
};
