import { useEffect } from 'react';

export default function Settings() {
  const setVh = () => {
    document.documentElement.style.setProperty(
      '--vh',
      `${window.innerHeight * 0.01}px`,
    );
  };

  const setFixedBody = () => {
    const body = document.body;
    body.style.position = 'fixed';
    body.style.overflow = 'hidden';
  };

  useEffect(() => {
    setVh();
    setFixedBody();

    window.addEventListener('resize', setVh);
    return () => {
      window.addEventListener('resize', setVh);
    };
  }, []);

  return null;
}
