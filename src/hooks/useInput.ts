import { useState } from 'react';

export const useInput = () => {
  const [value, setValue] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValue(e.currentTarget.value);
  };

  return [value, handleChange] as const;
};
