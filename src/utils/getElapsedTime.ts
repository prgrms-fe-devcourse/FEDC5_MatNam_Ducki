import dayjs from 'dayjs';

const timeUnits = [
  { unit: 'year', label: '년' },
  { unit: 'month', label: '달' },
  { unit: 'day', label: '일' },
  { unit: 'hour', label: '시간' },
  { unit: 'minute', label: '분' },
  { unit: 'second', label: '초' },
] as const;

export const getElapsedTime = (targetTime: string) => {
  const currentTime = dayjs();
  const targetDateTime = dayjs(targetTime);

  for (const { unit, label } of timeUnits) {
    const diff = currentTime.diff(targetDateTime, unit);
    if (diff > 0) {
      return `${diff}${label} 전`;
    }
  }
  return '방금 전';
};
