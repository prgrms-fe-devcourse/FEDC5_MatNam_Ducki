import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import ReviewForm from '@/components/ReviewForm';
import { userAtom } from '@/recoil/user';
import { PATH } from '@/routes/path';
import { Toast } from '@/utils/toast';

export default function ReviewPage() {
  const navigate = useNavigate();
  const user = useRecoilValue(userAtom);

  useEffect(() => {
    if (!user) {
      Toast.info('로그인 후 이용해 보세요!');
      navigate(PATH.SIGNIN);
    }
  }, []);

  return <ReviewForm />;
}
