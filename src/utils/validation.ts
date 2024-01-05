import { REGEX } from '@/constants/validation';

export const isPasswordShort = (password: string) => {
  return !password || password.length < length;
};

export const isPasswordContainsSpecialChar = (password: string) => {
  return REGEX.PASSWORD.test(password);
};
