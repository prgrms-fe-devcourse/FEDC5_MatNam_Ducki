import ReactDOM from 'react-dom';
import { useRecoilValue } from 'recoil';

import { MODAL_COMPONENTS } from '@/components/Common/Modal//ModalComponent';
import BaseModal from '@/components/Common/Modal/BaseModal';
import { modalAtom } from '@/recoil/modal';
import { ModalStateType } from '@/types/modal';

export default function ModalContainer() {
  const modalList = useRecoilValue(modalAtom);

  if (!modalList.length) return null;

  const modalContainer = document.getElementById('modal') as HTMLElement;

  const renderModal = modalList.map((props: ModalStateType) => {
    const ModalComponent = MODAL_COMPONENTS[props.type];
    return (
      <BaseModal key={props.type} {...props}>
        <ModalComponent />
      </BaseModal>
    );
  });

  return ReactDOM.createPortal(<>{renderModal}</>, modalContainer);
}
