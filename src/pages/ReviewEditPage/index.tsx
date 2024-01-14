import { useState } from 'react';

import { ChannelList } from '@/components/Channel/ChannelList';
import CTAButton from '@/components/Common/Button/CTAButton';
import ImageUpload from '@/components/Common/ImageUpload';
import { useGetDetail } from '@/hooks/ReviewDetail';
import { useInput } from '@/hooks/useInput';
import { Post } from '@/types/response';

import {
  InputStyle,
  ReviewForm,
  ReviewTextArea,
  Section,
  TextStyle,
} from '../ReviewPage/style';

export default function ReviewEditPage() {
  //const { state: pagePostId = '' } = useLocation();
  const pagePostId = '65a115e9817f4c1a36bc4795';
  const { data: post } = useGetDetail({ postId: pagePostId });

  console.log(post);

  const {
    review: prevPostTitle,
    restaurant: prevRestaurant,
    location: prevLocation,
    openingTime: prevOpeningTime,
    channel: prevChannel,
    image: prevPostImageUrl = '',
    imagePublicId: prevPostImagePublicId,
    _id: postId,
  } = post as Post;

  const [review, handleReview] = useInput(prevPostTitle);
  const [restaurant, handleRestaurant] = useInput(prevRestaurant);
  const [location, handleLocation] = useInput(prevLocation);
  const [openingTime, handleOpeningTime] = useInput(prevOpeningTime);
  const [channelId, setChannelId] = useState(prevChannel._id);
  const [image, setImage] = useState<string | null>(prevPostImageUrl);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (file: File | null) => {
    setFile(file); // 파일이 선택되면 file state를 업데이트
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

  return (
    <>
      <ReviewForm onSubmit={handleSubmit}>
        <Section>
          <TextStyle>가게 평가 *</TextStyle>
          <ChannelList channelId={channelId} handleClick={setChannelId} />
        </Section>
        <Section>
          <TextStyle>가게 이름 *</TextStyle>
          <InputStyle value={restaurant} />
        </Section>
        <Section>
          <TextStyle>가게 위치 *</TextStyle>
          <InputStyle value={location} />
        </Section>
        <Section>
          <TextStyle>영업 시간</TextStyle>
          <InputStyle value={openingTime} />
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
          <ReviewTextArea
            defaultValue={review}
            name="review"
            placeholder="후기 남기기"
          />
        </Section>
        <Section>
          <CTAButton>수정하기</CTAButton>
        </Section>
      </ReviewForm>
    </>
  );
}
