import { useRecoilState } from 'recoil';

import { modalAtom } from '@/recoil/modal';
import { MODAL_PROPS_BY_TYPE, ModalStateType } from '@/types/modal';

export function useModal() {
  const [modalList, setModalList] = useRecoilState<ModalStateType[]>(modalAtom);

  const openModal = ({ type }: ModalStateType) => {
    setModalList((modals) => {
      const modalProps = MODAL_PROPS_BY_TYPE.find((data) => data.type === type);
      return modalProps
        ? [...modals, { ...modalProps }]
        : [...modals, { type }];
    });
  };

  const closeModal = ({ type }: ModalStateType) => {
    setModalList((modals) => {
      return modals.filter((modal) => modal.type !== type);
    });
  };

  const clearModal = () => {
    setModalList([]);
  };

  return { modalList, openModal, closeModal, clearModal };
}
