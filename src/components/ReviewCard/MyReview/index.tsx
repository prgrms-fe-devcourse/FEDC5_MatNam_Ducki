import ThumbsDownIcon from '@/components/Common/Icons/ThumbsDownIcon';
import ThumbsUpIcon from '@/components/Common/Icons/ThumbsUpIcon';
import { CHANNEL } from '@/constants/channel';

import {
  LikeContainer,
  RestaurantLocation,
  RestaurantName,
  ReviewCardBody,
  ReviewCardContainer,
  ReviewCardContents,
  ReviewCardImage,
  ReviewCardInfo,
} from '../style';

interface MyReviewProps extends React.ComponentProps<'div'> {
  imageUrl?: string;
  restaurant: string;
  location: string;
  review: string;
  width?: string;
  likes: number;
  channelId: string;
}

/**
 *
 * @summary 사용법 <ReviewCard imageUrl={imageUrl} content={content} profileName={profileName} profileImage={profileImage} width={80%} />
 * @description Review의 데이터를 이용해 리뷰 카드를 만드는 컴포넌트를 구현했습니다. theme 설정이 완료되면 color를 theme에서 가져오도록 수정할 예정입니다.
 * @param {string} imageUrl - 리뷰 이미지
 * @param {string} content - 리뷰 내용
 * @param {string} profileName - 프로필 닉네임
 * @param {string} width - 리뷰 카드 너비
 */

export const MyReview = ({
  imageUrl,
  restaurant,
  location,
  review,
  likes,
  channelId,
  width = '100%',
  ...props
}: MyReviewProps) => {
  return (
    <ReviewCardContainer width={width} {...props}>
      <ReviewCardBody>
        <ReviewCardInfo>
          <RestaurantName>
            {restaurant}
            {channelId === CHANNEL.LIKE ? <ThumbsUpIcon /> : <ThumbsDownIcon />}
          </RestaurantName>
          <LikeContainer>❤ {likes}</LikeContainer>
        </ReviewCardInfo>
        <RestaurantLocation>{location}</RestaurantLocation>
        {imageUrl && <ReviewCardImage src={imageUrl} />}
        <ReviewCardContents>{review}</ReviewCardContents>
      </ReviewCardBody>
    </ReviewCardContainer>
  );
};
