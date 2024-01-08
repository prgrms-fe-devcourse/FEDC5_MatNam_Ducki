import { useRecoilState } from 'recoil';

import { modalAtom } from '@/recoil/modal';
import { ModalStateType } from '@/types/modal';

export function useModal() {
  const [modalList, setModalList] = useRecoilState<ModalStateType[]>(modalAtom);

  const openModal = (props: ModalStateType) => {
    setModalList((modals) => {
      return [...modals, props];
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
