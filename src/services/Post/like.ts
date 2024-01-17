import { Like } from '@/types/response';

import { axiosAuthInstance } from '../axiosInstance';
import { ENDPOINT } from '../endPoint';

/**
 * @description 특정 포스트에 좋아요를 눌렀을 때 호출합니다.
 */
export const createLike = async (postId: string) => {
  try {
    const response = await axiosAuthInstance.post<Like>(ENDPOINT.LIKES.CREATE, {
      postId,
    });

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

/**
 * @description 특정 포스트에 좋아요한 것을 취소합니다.
 */
export const deleteLike = async (likeId: string) => {
  try {
    const response = await axiosAuthInstance.delete<Like>(
      ENDPOINT.LIKES.DELETE,
      {
        data: {
          id: likeId,
        },
      },
    );

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
