import { CreateCommentPayload } from '@/types/payload';
import { Comment } from '@/types/response';

import { axiosAuthInstance } from '../axiosInstance';
import { ENDPOINT } from '../endPoint';

export const createComment = async ({
  comment,
  postId,
}: CreateCommentPayload) => {
  try {
    const response = await axiosAuthInstance.post<Comment>(
      ENDPOINT.COMMENTS.CREATE,
      {
        comment,
        postId,
      },
    );
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteComment = async (commentId: string) => {
  try {
    const response = await axiosAuthInstance.delete<Comment>(
      ENDPOINT.COMMENTS.DELETE,
      {
        data: {
          id: commentId,
        },
      },
    );
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
