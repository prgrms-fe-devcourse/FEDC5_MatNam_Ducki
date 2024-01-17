import { useRecoilState } from 'recoil';

import ReviewForm from '@/components/ReviewForm';
import { reviewAtom } from '@/recoil/review';

export default function ReviewPage() {
  const [reviewState, setReviewState] = useRecoilState(reviewAtom);

  console.log(reviewState);

  return (
    <>
      <ReviewForm />
    </>
  );
}
