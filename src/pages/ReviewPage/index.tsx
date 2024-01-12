import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChannelList } from '@/components/Channel/ChannelList';
import Button from '@/components/Common/Button/Button';
import ImageUpload from '@/components/Common/ImageUpload';
import { useCreatePost } from '@/hooks/useCreatePost';

import { ReviewForm, ReviewTextArea, Section } from './style';

export default function ReviewPage() {
  const { mutate: createPost, isLoading } = useCreatePost();

  const [file, setFile] = useState<File | null>(null);
  const [channelId, setChannelId] = useState('');

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
    const title = elements.review.value;

    createPost(
      { title, channelId, image: file },
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
          <p>가게 평가</p>
          <ChannelList channelId={channelId} handleClick={handleChannelId} />
        </Section>
        <Section>
          <p>가게 이름</p>
        </Section>
        <Section>
          <p>영업 시간</p>
        </Section>
        <Section className="relative">
          <p>이미지 추가</p>
          <ImageUpload
            image={image}
            onFileChange={handleFileChange}
            borderRadius="1rem"
          />
        </Section>
        <Section>
          <p>후기 작성</p>
          <ReviewTextArea name="review" placeholder="후기 남기기" />
        </Section>
        <Section>
          <Button
            width="100%"
            height="3rem"
            textSize="1.2rem"
            textColor="white">
            등록하기
          </Button>
        </Section>
      </ReviewForm>
    </>
  );
}
