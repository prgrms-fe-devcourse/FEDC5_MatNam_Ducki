import { useMutation } from '@tanstack/react-query';

import { createPost, updatePost } from '@/services/Post/post';

export const useCreatePost = () => {
  return useMutation({ mutationFn: createPost });
};

export const useUpdatePost = () => {
  return useMutation({ mutationFn: updatePost });
};
