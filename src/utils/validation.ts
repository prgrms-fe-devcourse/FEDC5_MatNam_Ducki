import { REGEX } from '@/constants/validation';

interface CreatePost {
  channelId: string;
  restaurant: string;
  location: string;
  review: string;
}

export const isPasswordShort = (password: string) => {
  return !password || password.length < 8;
};

export const isPasswordContainsSpecialChar = (password: string) => {
  return REGEX.PASSWORD.test(password);
};

export const isValidCreatePost = ({
  channelId,
  restaurant,
  location,
  review,
}: CreatePost) => {
  return (
    channelId.length > 0 &&
    restaurant.length > 0 &&
    location.length > 0 &&
    review.trim().length > 0
  );
};
