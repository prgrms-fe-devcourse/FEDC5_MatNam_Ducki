import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import ReviewForm from '@/components/ReviewForm';
import { useGetDetail } from '@/hooks/ReviewDetail';
import { reviewAtom } from '@/recoil/review';

export default function ReviewPage() {
  const { postId } = useParams();

  const [reviewState, setReviewState] = useRecoilState(reviewAtom);

  if (postId == null) {
    alert('존재하지 않는 글입니다.');
    return;
  }

  const { data: post } = useGetDetail({ postId });

  useEffect(() => {
    if (post != null) {
      const {
        review,
        restaurant,
        location,
        openingTime,
        image,
        imagePublicId,
        channel,
      } = post;

      setReviewState({
        review,
        restaurant,
        location,
        openingTime,
        image: image ?? '',
        imagePublicId,
        imageToDeletePublicId: null,
        channelId: channel._id,
      });
    }
  }, [post]);

  return <ReviewForm postId={postId} isEdit />;
}
