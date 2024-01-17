import { atom } from 'recoil';

import { User } from '@/types/response';

import { localStorageEffect } from './localStorage';

export const userAtom = atom<User | null>({
  key: 'userState',
  default: null,
  effects: [localStorageEffect<User | null>('user')],
});
