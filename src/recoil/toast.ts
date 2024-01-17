import { atom } from 'recoil';

import { Toast } from '@/types/toast';

export const toastState = atom<Toast[]>({
  key: 'toastState',
  default: [],
});

export const positionState = atom<string>({
  key: 'positionState',
  default: 'top-center',
});
