import { createPortal } from 'react-dom';
import { useRecoilValue } from 'recoil';

import { toastState } from '@/recoil/toast';

import BaseToast from '../BaseToast';
import { ToastWrapper } from './style';

export default function ToastContainer() {
  const ref = document.querySelector('#toast');

  const toasts = useRecoilValue(toastState);

  if (!ref) {
    return null;
  }
  return createPortal(
    <ToastWrapper>
      {toasts.map((toast) => (
        <BaseToast key={toast.id}>{toast.content}</BaseToast>
      ))}
    </ToastWrapper>,
    ref,
  );
}
