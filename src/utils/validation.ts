import { REGEX } from '@/constants/validation';

export const isPasswordShort = (password: string) => {
  return !password || password.length < 8;
};

export const isPasswordContainsSpecialChar = (password: string) => {
  return REGEX.PASSWORD.test(password);
};
