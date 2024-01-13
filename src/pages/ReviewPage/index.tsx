import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChannelList } from '@/components/Channel/ChannelList';
import CTAButton from '@/components/Common/Button/CTAButton';
import ImageUpload from '@/components/Common/ImageUpload';
import { useCreatePost } from '@/hooks/useCreatePost';
import { useInput } from '@/hooks/useInput';

import {
  InputStyle,
  ReviewForm,
  ReviewTextArea,
  Section,
  TextStyle,
} from './style';

export default function ReviewPage() {
  const { mutate: createPost, isLoading } = useCreatePost();

  const [file, setFile] = useState<File | null>(null);
  const [channelId, setChannelId] = useState('');
  const [restaurant, handleRestaurant] = useInput();
  const [location, handleLocation] = useInput();
  const [openingTime, handleOpeningTime] = useInput();

  const image = file ? URL.createObjectURL(file) : null; // 파일이 있으면 url을 만들어서 image에 넣어줍니다.
  const navigate = useNavigate();

  const handleFileChange = (file: File | null) => {
    setFile(file); // 파일이 선택되면 file state를 업데이트
  };

  const handleChannelId = useCallback((channelId: string) => {
    setChannelId(channelId);
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const elements = event.currentTarget;
    const review = elements.review.value;

    createPost(
      { review, restaurant, location, openingTime, channelId, image: file },
      {
        onSuccess: () => {
          alert('succeess');
          navigate('/');
        },
        onError: () => {
          alert('글 등록 실패');
        },
      },
    );
  };

  return (
    <>
      <ReviewForm onSubmit={handleSubmit}>
        <Section>
          <TextStyle>가게 평가 *</TextStyle>
          <ChannelList channelId={channelId} handleClick={handleChannelId} />
        </Section>
        <Section>
          <TextStyle>가게 이름 *</TextStyle>
          <InputStyle onChange={handleRestaurant} />
        </Section>
        <Section>
          <TextStyle>가게 위치 *</TextStyle>
          <InputStyle onChange={handleLocation} />
        </Section>
        <Section>
          <TextStyle>영업 시간</TextStyle>
          <InputStyle onChange={handleOpeningTime} />
        </Section>
        <Section className="relative">
          <TextStyle>이미지 추가</TextStyle>
          <ImageUpload
            image={image}
            onFileChange={handleFileChange}
            borderRadius="1rem"
          />
        </Section>
        <Section>
          <TextStyle>후기 작성 *</TextStyle>
          <ReviewTextArea name="review" placeholder="후기 남기기" />
        </Section>
        <Section>
          <CTAButton>등록하기</CTAButton>
        </Section>
      </ReviewForm>
    </>
  );
}
