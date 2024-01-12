import { ChannelList } from '@/components/Channel/ChannelList';
import ImageUpload from '@/components/Common/ImageUpload';

import {
  CreateButton,
  ReviewContainer,
  ReviewForm,
  ReviewTextArea,
} from '../ReviewPage/style';

export default function ReviewEditPage() {
  return (
    <>
      <ReviewContainer>
        <ReviewForm>
          <section>
            <p>채널 선택</p>
            <ChannelList channelId={channelId} handleClick={handleChannelId} />
          </section>
          <section className="relative">
            <ImageUpload image={image} onFileChange={handleFileChange} />
            <ReviewTextArea name="review" placeholder="후기를 작성해보세요." />
            <CreateButton disabled={isLoading}>등록</CreateButton>
          </section>
        </ReviewForm>
      </ReviewContainer>
    </>
  );
}
