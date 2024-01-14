import { useMutation } from '@tanstack/react-query';

import { deletePost } from '@/services/Post/post';

export const useDeletePost = () => {
  return useMutation({ mutationFn: deletePost });
};
