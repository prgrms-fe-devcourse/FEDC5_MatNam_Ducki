import { useState } from 'react';

import { ChannelList } from '@/components/Channel/ChannelList';
import ImageUpload from '@/components/Common/ImageUpload';
import { useGetDetail } from '@/hooks/ReviewDetail';
import { Post } from '@/types/response';

import {
  ReviewContainer,
  ReviewForm,
  ReviewTextArea,
} from '../ReviewPage/style';

export default function ReviewEditPage() {
  //const { state: pagePostId = '' } = useLocation();
  const pagePostId = '659b814fb24c8519236e90bd';
  const { data: post } = useGetDetail({ postId: pagePostId });

  console.log(post);

  const {
    title: prevPostTitle,
    channel: prevChannel,
    image: prevPostImageUrl = '',
    imagePublicId: prevPostImagePublicId,
    _id: postId,
  } = post as Post;

  const [title, setTitle] = useState(prevPostTitle);
  const [channelId, setChannelId] = useState(prevChannel._id);
  const [image, setImage] = useState<string | null>(prevPostImageUrl);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (file: File | null) => {
    setFile(file); // 파일이 선택되면 file state를 업데이트
  };

  return (
    <>
      <ReviewContainer>
        <ReviewForm>
          <section>
            <p>채널 선택</p>
            <ChannelList channelId={channelId} handleClick={setChannelId} />
          </section>
          <section className="relative">
            <ImageUpload image={image} onFileChange={handleFileChange} />
            <ReviewTextArea
              name="review"
              defaultValue={prevPostTitle}
              placeholder="후기를 작성해보세요."
            />
            {/* <CreateButton disabled={isLoading}>등록</CreateButton> */}
          </section>
        </ReviewForm>
      </ReviewContainer>
    </>
  );
}
