import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import ReviewForm from '@/components/ReviewForm';
import { useGetDetail } from '@/hooks/ReviewDetail';
import { reviewAtom } from '@/recoil/review';
import { Toast } from '@/utils/toast';

export default function ReviewPage() {
  const { postId } = useParams();

  const setReviewState = useSetRecoilState(reviewAtom);

  if (postId == null) {
    Toast.error('존재하지 않는 글입니다.');
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
