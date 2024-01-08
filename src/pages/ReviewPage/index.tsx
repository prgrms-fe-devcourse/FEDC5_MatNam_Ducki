import React, { useCallback, useState } from 'react';

import { ChannelList } from '@/components/Channel/ChannelList';
import ImageUpload from '@/components/Common/ImageUpload';
import { useCreatePost } from '@/hooks/useCreatePost';

import { CreateButton, ReviewContainer, ReviewTextArea } from './style';

export default function ReviewPage() {
  const { mutate: createPost, isLoading } = useCreatePost();

  const [file, setFile] = useState<File | null>(null);
  const [channelId, setChannelId] = useState('');

  const image = file ? URL.createObjectURL(file) : null; // 파일이 있으면 url을 만들어서 image에 넣어줍니다.

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
        },
      },
    );
  };

  return (
    <>
      <ReviewContainer>
        <form onSubmit={handleSubmit}>
          <section>
            <p>채널 선택</p>
            <ChannelList channelId={channelId} handleClick={handleChannelId} />
          </section>
          <section className="relative">
            <ImageUpload image={image} onFileChange={handleFileChange} />
            <ReviewTextArea name="review" placeholder="후기를 작성해보세요." />
            <CreateButton disabled={isLoading}>등록</CreateButton>
          </section>
        </form>
      </ReviewContainer>
    </>
  );
}
