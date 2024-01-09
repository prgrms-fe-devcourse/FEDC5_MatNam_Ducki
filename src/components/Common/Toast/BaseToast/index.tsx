import { BaseToastWrapper } from './style';

interface BaseToastProps {
  id: string;
  children: React.ReactNode;
}

export default function BaseToast({ id, children }: BaseToastProps) {
  return (
    <BaseToastWrapper id={id}>
      {children}
      <button>삭제</button>
    </BaseToastWrapper>
  );
}
