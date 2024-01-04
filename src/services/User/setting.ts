import { User } from '@/types';
import { UpdateUserNamePayload } from '@/types/payload';

import { axiosAuthInstance } from '../axiosInstance';
import { ENDPOINT } from '../endPoint';

export const updateUserName = async ({
  fullName,
  userName,
}: UpdateUserNamePayload) => {
  try {
    const response = await axiosAuthInstance.put<User>(
      ENDPOINT.SETTINGS.UPDATE_USER,
      {
        fullName,
        userName,
      },
    );

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updateUserPassword = async (password: string) => {
  try {
    await axiosAuthInstance.put(ENDPOINT.SETTINGS.UPDATE_PASSWORD, {
      password,
    });
  } catch (error) {
    console.error(error);
  }
};
