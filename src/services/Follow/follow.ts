import { Follow } from '@/types/response';

import { axiosAuthInstance } from '../axiosInstance';
import { ENDPOINT } from '../endPoint';

export const createFollow = async (userId: string) => {
  try {
    const response = await axiosAuthInstance.post<Follow>(
      ENDPOINT.FOLLOW.CREATE,
      {
        userId,
      },
    );

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteFollow = async (userId: string) => {
  try {
    const response = await axiosAuthInstance.delete<Follow>(
      ENDPOINT.FOLLOW.DELETE,
      {
        data: { id: userId },
      },
    );

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
