import { useRecoilState } from 'recoil';

import { positionState, Toast, toastState } from '@/recoil/toast';

const getRandomID = () => String(new Date().getTime());

export function useToast() {
  const [toasts, setToasts] = useRecoilState(toastState);
  const [position, setPosition] = useRecoilState(positionState);

  const removeToast = (id: Toast['id']) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const addToast = (toast: Toast) => {
    const id = getRandomID();
    setToasts((prev) => [...prev, { ...toast, id }]);
    setTimeout(() => removeToast(id), 2000);
  };

  const addPosition = (newPosition: string) => {
    setPosition(newPosition);
  };

  return { addToast, removeToast, addPosition, toasts, position };
}
