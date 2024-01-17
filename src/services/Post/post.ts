import {
  CreatePostPayload,
  GetPostByChannelPayload,
  GetPostByUserPayload,
  UpdatePostPayload,
} from '@/types/payload';
import { Post } from '@/types/response';

import { axiosAuthInstance, axiosInstance } from '../axiosInstance';
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

    const parsedData = response.map((post: Post) => {
      const { review, restaurant, location, openingTime }: Post = JSON.parse(
        post.title,
      );

      return {
        ...post,
        review,
        restaurant,
        location,
        openingTime,
      };
    });

    return parsedData;
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

    const parsedData = response.map((post: Post) => {
      const { review, restaurant, location, openingTime }: Post = JSON.parse(
        post.title,
      );

      return {
        ...post,
        review,
        restaurant,
        location,
        openingTime,
      };
    });

    return parsedData;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const createPost = async ({
  review,
  restaurant,
  location,
  openingTime,
  image,
  channelId,
}: CreatePostPayload) => {
  try {
    const customPost = JSON.stringify({
      review,
      restaurant,
      location,
      openingTime,
    });
    const formData = new FormData();

    if (image) {
      formData.append('image', image);
    }

    formData.append('title', customPost);
    formData.append('channelId', channelId);

    await axiosAuthInstance.post(ENDPOINT.POSTS.CREATE, formData);
  } catch (error) {
    console.error(error);
  }
};

export const getPostDetail = async (postId: string) => {
  try {
    const response = await axiosInstance.get<Post>(ENDPOINT.POSTS.POST(postId));

    const { review, restaurant, location, openingTime } = JSON.parse(
      response.title,
    );

    const parsedData: Post = {
      ...response,
      review,
      restaurant,
      location,
      openingTime,
    };

    return parsedData;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updatePost = async ({
  postId,
  review,
  restaurant,
  location,
  openingTime,
  image,
  channelId,
  imageToDeletePublicId,
}: UpdatePostPayload) => {
  try {
    const customPost = JSON.stringify({
      review,
      restaurant,
      location,
      openingTime,
    });
    const formData = new FormData();

    formData.append('postId', postId);
    formData.append('title', customPost);
    formData.append('channelId', channelId);

    if (image instanceof File) {
      formData.append('image', image);
    }

    if (imageToDeletePublicId) {
      formData.append('imageToDeletePublicId', imageToDeletePublicId);
    }

    await axiosAuthInstance.put<Post>(ENDPOINT.POSTS.UPDATE, formData);
  } catch (error) {
    console.error(error);
  }
};

export const deletePost = async (postId: string) => {
  try {
    await axiosAuthInstance.delete(ENDPOINT.POSTS.DELETE, {
      data: {
        id: postId,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
