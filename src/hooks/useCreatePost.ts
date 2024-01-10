import { useMutation } from '@tanstack/react-query';

import { createPost } from '@/services/Post/post';

export const useCreatePost = () => {
  return useMutation({ mutationFn: createPost });
};
