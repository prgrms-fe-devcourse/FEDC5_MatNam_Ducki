import { useEffect } from 'react';

import { useModal } from '@/hooks/useModal';
import { ModalStateType } from '@/types/modal';
import { bodyScroll } from '@/utils/scroll';

import CloseIcon from '../../Icons/CloseIcon';
import {
  BaseModalWrapper,
  CloseButton,
  Modal,
  ModalContainer,
  ModalOverlay,
} from './style';

interface BaseModalProps extends React.ComponentProps<'div'>, ModalStateType {}

export default function BaseModal({
  type,
  isOverlay = true,
  isCloseButton = true,
  children,
}: BaseModalProps) {
  const { closeModal } = useModal();

  const handleModalClose = () => {
    closeModal({ type });
  };

  useEffect(() => {
    bodyScroll.disable();

    return () => {
      bodyScroll.enable();
    };
  }, []);

  return (
    <BaseModalWrapper role="dialog">
      {isOverlay && <ModalOverlay onClick={handleModalClose} />}
      <ModalContainer>
        {isCloseButton && (
          <CloseButton onClick={handleModalClose}>
            <CloseIcon />
          </CloseButton>
        )}
        <Modal>{children}</Modal>
      </ModalContainer>
    </BaseModalWrapper>
  );
}
