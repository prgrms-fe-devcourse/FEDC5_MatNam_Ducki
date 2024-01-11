import { useRecoilState } from 'recoil';

import { Toast, toastState } from '@/recoil/toast';

const getRandomID = () => String(new Date().getTime());

export function useToast() {
  const [toasts, setToasts] = useRecoilState(toastState);

  const removeToast = (id: Toast['id']) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const addToast = (toast: Toast) => {
    const id = getRandomID();
    setToasts((prev) => [...prev, { ...toast, id }]);
    setTimeout(() => removeToast(id), 1000);
  };

  return { addToast, removeToast, toasts };
}
