import { Post, User } from '@/types/response';

import { axiosInstance } from '../axiosInstance';
import { ENDPOINT } from '../endPoint';

export const searchUsers = async (query: string) => {
  try {
    const response = await axiosInstance.get<User[]>(
      ENDPOINT.SEARCH.USERS(query),
    );

    console.log(response);

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const searchAll = async (query: string) => {
  try {
    const response = await axiosInstance.get<User[] | Post[]>(
      ENDPOINT.SEARCH.ALL(query),
    );

    const userData: User[] = [];
    const postData: Post[] = [];

    if (Array.isArray(response)) {
      response.forEach((item) => {
        if ('fullName' in item) {
          userData.push(item as User);
        } else {
          if (item.title) {
            const { review, restaurant, location, openingTime } = JSON.parse(
              item.title,
            );
            item.review = review;
            item.restaurant = restaurant;
            item.location = location;
            item.openingTime = openingTime;
          }
          postData.push(item as Post);
        }
      });
    }

    return { userData, postData };
  } catch (error) {
    console.error(error);
    return null;
  }
};
