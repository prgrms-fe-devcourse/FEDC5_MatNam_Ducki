import 'dayjs/locale/ko';

import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.locale('ko');
dayjs.extend(utc);
dayjs.extend(timezone);

const location = 'Asia/Seoul';

export const convertUtcToKstTime = (utcString: string) => {
  return dayjs.utc(utcString).tz(location).format('HH:mm');
};

export const convertUtcToKstDate = (utcString: string) => {
  return dayjs.utc(utcString).tz(location).format('YYYY년 MM월 DD일 dd요일');
};
