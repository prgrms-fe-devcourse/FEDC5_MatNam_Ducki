import { atom } from 'recoil';

export const selectedFileAtom = atom<File | File[] | null>({
  key: 'selectedFileState',
  default: [],
});
