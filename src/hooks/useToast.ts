import { useRecoilState } from 'recoil';

import { MAX_TOAST_COUNT, TOAST_REMOVE_DELAY } from '@/constants/toast';
import { positionState, toastState } from '@/recoil/toast';
import { Toast } from '@/types/toast';

const getRandomID = () => String(new Date().getTime());

export function useToast() {
  const [toasts, setToasts] = useRecoilState(toastState);
  const [position, setPosition] = useRecoilState(positionState);

  const removeToast = (id: Toast['id']) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const addToast = (toast: Toast, position: string) => {
    if (toasts.length >= MAX_TOAST_COUNT) {
      return;
    }
    const id = getRandomID();
    setPosition(position);
    setToasts((prev) => [...prev, { ...toast, id }]);
    setTimeout(() => removeToast(id), TOAST_REMOVE_DELAY);
  };

  return { addToast, removeToast, toasts, position };
}
