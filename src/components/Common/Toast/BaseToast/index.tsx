interface BaseToastProps {
  id: string;
  children: React.ReactNode;
}

export default function BaseToast({ id, children }: BaseToastProps) {
  return (
    <div id={id}>
      {children}
      <button>삭제</button>
    </div>
  );
}
