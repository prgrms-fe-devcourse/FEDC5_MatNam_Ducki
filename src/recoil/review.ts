import { atom } from 'recoil';

import { ReviewType } from '@/types/payload';

export const reviewAtom = atom<ReviewType>({
  key: 'selectedLocationState',
  default: {
    review: '',
    restaurant: '',
    location: '',
    openingTime: '',
    image: null,
    channelId: '65a67d71231c3e492734777f',
  },
  // effects: [localStorageEffect<ReviewType>('review')],
});
