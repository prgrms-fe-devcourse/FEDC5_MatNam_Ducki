import { atom } from 'recoil';

import { User } from '@/types/response';

export const userAtom = atom<User | null>({
  key: 'userState',
  default: null,
});
