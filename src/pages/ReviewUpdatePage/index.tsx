import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChannelList } from '@/components/Channel/ChannelList';
import CTAButton from '@/components/Common/Button/CTAButton';
import ImageUpload from '@/components/Common/ImageUpload';
import { useGetDetail } from '@/hooks/ReviewDetail';
import { useUpdatePost } from '@/hooks/useCreatePost';
import { useInput } from '@/hooks/useInput';
import { PATH } from '@/routes/path';
import { Post } from '@/types/response';

import {
  InputStyle,
  ReviewForm,
  ReviewTextArea,
  Section,
  TextStyle,
} from '../ReviewPage/style';

export default function ReviewUpdatePage() {
  //const { state: pagePostId = '' } = useLocation();
  const pagePostId = '65a115e9817f4c1a36bc4795';
  const { data: post } = useGetDetail({ postId: pagePostId });

  console.log(post);

  const {
    review: prevPostReview,
    restaurant: prevRestaurant,
    location: prevLocation,
    openingTime: prevOpeningTime,
    channel: prevChannel,
    image: prevPostImageUrl = '',
    imagePublicId: prevPostImagePublicId,
    _id: postId,
  } = post as Post;

  const { mutate: updatePost } = useUpdatePost();
  const navigate = useNavigate();

  const [restaurant, handleRestaurant] = useInput(prevRestaurant);
  const [location, handleLocation] = useInput(prevLocation);
  const [openingTime, handleOpeningTime] = useInput(prevOpeningTime);
  const [channelId, setChannelId] = useState(prevChannel._id);
  const [image, setImage] = useState<string | null>(prevPostImageUrl);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (file: File | null) => {
    setFile(file); // 파일이 선택되면 file state를 업데이트
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const elements = e.currentTarget;
    const review = elements.review.value;

    const newPost = {
      postId,
      review,
      restaurant,
      location,
      openingTime,
      image: file,
      imageToDeletePublicId: file ? undefined : prevPostImagePublicId,
      channelId,
    };

    updatePost(newPost, {
      onSuccess: () => {
        alert('수정되었습니다.');
        navigate(`${PATH.ROOT}`);
      },
      onError: () => {
        alert('수정에 실패하였습니다.');
      },
    });
  };

  return (
    <>
      <ReviewForm onSubmit={handleSubmit}>
        <Section>
          <TextStyle>가게 평가 *</TextStyle>
          <ChannelList channelId={channelId} handleClick={setChannelId} />
        </Section>
        <Section>
          <TextStyle>가게 이름 *</TextStyle>
          <InputStyle value={restaurant} onChange={handleRestaurant} />
        </Section>
        <Section>
          <TextStyle>가게 위치 *</TextStyle>
          <InputStyle value={location} onChange={handleLocation} />
        </Section>
        <Section>
          <TextStyle>영업 시간</TextStyle>
          <InputStyle value={openingTime} onChange={handleOpeningTime} />
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
            defaultValue={prevPostReview}
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
