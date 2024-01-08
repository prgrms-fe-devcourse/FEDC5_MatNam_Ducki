import { atom } from 'recoil';

import { ModalStateType } from '@/types/modal';

import { localStorageEffect } from './localStorage';

export const modalAtom = atom<ModalStateType[]>({
  key: 'modalState',
  default: [],
  effects: [localStorageEffect<ModalStateType[]>('modal')],
});
