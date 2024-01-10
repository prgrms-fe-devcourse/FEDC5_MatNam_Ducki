import { useErrorBoundary } from 'react-error-boundary';

export default function ErrorFallback() {
  const { resetBoundary } = useErrorBoundary();

  return (
    <div>
      <p>문제가 발생했습니다.</p>
      <button onClick={resetBoundary}>새로고침</button>
    </div>
  );
}
