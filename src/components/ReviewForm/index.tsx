import React, { ChangeEvent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { ChannelList } from '@/components/Channel/ChannelList';
import CTAButton from '@/components/Common/Button/CTAButton';
import ReviewImageUpload from '@/components/Common/ReviewImageUpload';
import SearchBar from '@/components/SearchBar';
import { useCreatePost, useUpdatePost } from '@/hooks/usePost';
import { reviewAtom } from '@/recoil/review';
import { PATH } from '@/routes/path';
import { isValidCreatePost } from '@/utils/validation';

import {
  InputStyle,
  ReviewFormWrapper,
  ReviewTextArea,
  Section,
  TextStyle,
} from './style';

interface ReviewFormProps {
  postId?: string;
  isEdit?: boolean;
}

export default function ReviewForm({
  postId,
  isEdit = false,
}: ReviewFormProps) {
  const [reviewState, setReviewState] = useRecoilState(reviewAtom);
  const { channelId, restaurant, location, review } = reviewState;

  const navigate = useNavigate();

  const { mutate: createPost } = useCreatePost();
  const { mutate: updatePost } = useUpdatePost();

  const isFormValid = () => {
    const isValid = isValidCreatePost({
      channelId,
      restaurant,
      location,
      review,
    });
    return isValid;
  };

  const handleChannelId = useCallback((channelId: string) => {
    setReviewState((prev) => ({ ...prev, channelId }));
  }, []);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setReviewState((prev) => ({ ...prev, [name]: value }));
  };

  const handleResetRestaurant = () => {
    setReviewState((prev) => ({ ...prev, restaurant: '', location: '' }));
  };

  const handleCreatePost = () => {
    const reviewData = {
      ...reviewState,
      image: reviewState.image instanceof File ? reviewState.image : null,
    };

    createPost(reviewData, {
      onSuccess: () => {
        alert('succeess');
        navigate('/');
      },
      onError: () => {
        alert('글 등록 실패');
      },
    });
  };

  const handleUpdatePost = () => {
    if (!postId) {
      alert('유효하지 않은 post예요');
      return;
    }

    const reviewData = {
      ...reviewState,
      postId,
      image: reviewState.image instanceof File ? reviewState.image : null,
      imageToDeletePublicId: reviewState.image
        ? null
        : reviewState.imagePublicId,
    };

    updatePost(reviewData, {
      onSuccess: () => {
        alert('succeess');
        navigate('/');
      },
      onError: () => {
        alert('글 등록 실패');
      },
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isFormValid()) {
      alert('필수 입력 사항을 모두 입력해주세요.');
      return;
    }

    if (isEdit) {
      handleUpdatePost();
    } else {
      handleCreatePost();
    }
  };

  return (
    <ReviewFormWrapper onSubmit={handleSubmit}>
      <Section>
        <TextStyle>가게 평가 *</TextStyle>
        <ChannelList
          channelId={reviewState.channelId}
          handleClick={handleChannelId}
        />
      </Section>
      <Section>
        <TextStyle>가게 이름 *</TextStyle>
        <SearchBar
          defaultValue={reviewState.restaurant}
          disabled
          placeholder="가게 검색하기"
          navigatePath={isEdit ? '' : PATH.SEARCH.MAP}
          onReset={handleResetRestaurant}
        />
      </Section>
      {reviewState.location && (
        <Section>
          <TextStyle>가게 위치 *</TextStyle>
          <InputStyle value={reviewState.location} disabled />
        </Section>
      )}
      <Section>
        <TextStyle>영업 시간</TextStyle>
        <InputStyle
          name="openingTime"
          value={reviewState.openingTime}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </Section>
      <Section className="relative">
        <TextStyle>이미지 추가</TextStyle>
        <ReviewImageUpload />
      </Section>
      <Section>
        <TextStyle>후기 작성 *</TextStyle>
        <ReviewTextArea
          name="review"
          value={reviewState.review}
          onChange={handleInputChange}
          placeholder="후기 남기기"
          autoComplete="off"
        />
      </Section>
      <Section>
        <CTAButton disabled={!isFormValid()}>
          {isEdit ? '수정하기' : '등록하기'}
        </CTAButton>
      </Section>
    </ReviewFormWrapper>
  );
}
