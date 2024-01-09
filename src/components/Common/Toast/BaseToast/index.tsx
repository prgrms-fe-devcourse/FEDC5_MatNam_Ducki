import { BaseToastWrapper } from './style';

interface BaseToastProps {
  id: string;
  children: React.ReactNode;
  backgroundColor?: string;
}

export default function BaseToast({
  id,
  children,
  backgroundColor,
}: BaseToastProps) {
  const style = {
    backgroundColor: backgroundColor || '#ffffff',
  };
  return (
    <BaseToastWrapper id={id} style={style}>
      {children}
      <button>삭제</button>
    </BaseToastWrapper>
  );
}
