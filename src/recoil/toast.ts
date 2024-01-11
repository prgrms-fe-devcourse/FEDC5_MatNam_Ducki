import { atom } from 'recoil';

export interface Toast {
  id?: string;
  content: string;
  backgroundColor?: string;
}

export const toastState = atom<Toast[]>({
  key: 'toastState',
  default: [],
});
