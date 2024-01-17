import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import ReviewForm from '@/components/ReviewForm';
import { userAtom } from '@/recoil/user';
import { PATH } from '@/routes/path';
import { Toast } from '@/utils/toast';

export default function ReviewPage() {
  const userState = useRecoilValue(userAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userState) {
      Toast.info('로그인이 필요합니다.');
      navigate(PATH.SIGNIN);
    }
  }, [userState?._id]);

  return <ReviewForm />;
}
