import { User } from '@/types';
import { GetUsersPayload, UpdateProfileImagePayload } from '@/types/payload';

import { axiosAuthInstance, axiosInstance } from '../axiosInstance';
import { ENDPOINT } from '../endPoint';

export const getUsers = async ({ offset = 0, limit = 10 }: GetUsersPayload) => {
  try {
    const response = await axiosInstance.get<User[]>(ENDPOINT.USERS.GET_USERS, {
      params: {
        offset,
        limit,
      },
    });

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getUser = async (userId: string) => {
  try {
    const response = await axiosAuthInstance.get<User>(
      ENDPOINT.USERS.USER(userId),
    );

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updateProfileImage = async ({
  image,
  isCover = false,
}: UpdateProfileImagePayload) => {
  try {
    const formData = new FormData();
    formData.append('isCover', isCover ? 'true' : 'false');
    formData.append('image', image);

    const response = await axiosAuthInstance.post<User>(
      ENDPOINT.USERS.UPLOAD_PHOTO,
      formData,
    );

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
