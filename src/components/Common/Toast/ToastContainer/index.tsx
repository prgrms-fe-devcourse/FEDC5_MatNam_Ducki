import { createPortal } from 'react-dom';
import { useRecoilValue } from 'recoil';

import { positionState, toastState } from '@/recoil/toast';

import BaseToast from '../BaseToast';
import { ToastWrapper } from './style';

export default function ToastContainer() {
  const ref = document.querySelector('#toast');

  const toasts = useRecoilValue(toastState);
  const position = useRecoilValue(positionState);

  if (!ref) {
    return null;
  }
  return createPortal(
    <ToastWrapper position={position}>
      {toasts.map((toast) => (
        <BaseToast key={toast.id} backgroundColor={toast.backgroundColor}>
          {toast.content}
        </BaseToast>
      ))}
    </ToastWrapper>,
    ref,
  );
}
