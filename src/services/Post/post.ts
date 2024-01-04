import { Post } from '@/types';
import {
  CreatePostPayload,
  GetPostByChannelPayload,
  GetPostByUserPayload,
  UpdatePostPayload,
} from '@/types/payload';

import { axiosInstance } from '../axiosInstance';
import { ENDPOINT } from '../endPoint';

export const getPostByChannel = async ({
  channelId,
  offset = 0,
  limit = 10,
}: GetPostByChannelPayload) => {
  try {
    const response = await axiosInstance.get<Post[]>(
      ENDPOINT.POSTS.BY_CHANNEL_ID(channelId),
      {
        params: {
          offset,
          limit,
        },
      },
    );

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getPostByUser = async ({
  userId,
  offset = 0,
  limit = 10,
}: GetPostByUserPayload) => {
  try {
    const response = await axiosInstance.get<Post[]>(
      ENDPOINT.POSTS.BY_USER_ID(userId),
      {
        params: {
          offset,
          limit,
        },
      },
    );

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const createPost = async ({
  title,
  image,
  channelId,
}: CreatePostPayload) => {
  try {
    if (image == null) {
      throw new Error('이미지가 비어있습니다.');
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', image);
    formData.append('channelId', channelId);

    await axiosInstance.post(ENDPOINT.POSTS.CREATE, formData);
  } catch (error) {
    console.error(error);
  }
};

export const getPostDetail = async (postId: string) => {
  try {
    const response = await axiosInstance.get<Post>(ENDPOINT.POSTS.POST(postId));

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updatePost = async ({
  postId,
  title,
  image,
  channelId,
}: UpdatePostPayload) => {
  try {
    const formData = new FormData();
    formData.append('postId', postId);
    formData.append('title', title);
    formData.append('channelId', channelId);

    if (image instanceof File) {
      formData.append('image', image);
    }

    await axiosInstance.put<Post>(ENDPOINT.POSTS.UPDATE, formData);
  } catch (error) {
    console.error(error);
  }
};

export const deletePost = async (postId: string) => {
  try {
    await axiosInstance.delete(ENDPOINT.POSTS.DELETE, {
      data: {
        id: postId,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
