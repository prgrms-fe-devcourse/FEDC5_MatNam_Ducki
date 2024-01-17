import { useMutation, useQuery } from '@tanstack/react-query';

import { createPost, getPostByChannel, updatePost } from '@/services/Post/post';
import { GetPostByChannelPayload } from '@/types/payload';

export const useGetPostByChannel = ({ channelId }: GetPostByChannelPayload) => {
  return useQuery({
    queryKey: ['postsByChannel', channelId],
    queryFn: () => getPostByChannel({ channelId }),
    retry: false,
  });
};

export const useCreatePost = () => {
  return useMutation({ mutationFn: createPost });
};

export const useUpdatePost = () => {
  return useMutation({ mutationFn: updatePost });
};
