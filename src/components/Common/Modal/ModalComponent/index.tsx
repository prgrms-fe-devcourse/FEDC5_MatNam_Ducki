import { ReactElement } from 'react';

import ChangeImageModal from '@/components/Common/Modal/ChangeImageModal';
import ViewFollowModal from '@/components/Common/Modal/ViewFollowModal';
import { ModalType } from '@/types/modal';

export const MODAL_COMPONENTS: {
  [key in ModalType]: () => ReactElement | null;
} = {
  [ModalType.CHANGE_IMAGE]: ChangeImageModal,
  [ModalType.VIEW_FOLLOW]: ViewFollowModal,
};
