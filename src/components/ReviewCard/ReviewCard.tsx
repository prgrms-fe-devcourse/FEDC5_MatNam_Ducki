import { useRedirectToProfile } from '@/hooks/useRedirectProfile';
import { getElapsedTime } from '@/utils/getElapsedTime';

import {
  ElaspedTime,
  LikeContainer,
  ProfileNickname,
  RestaurantLocation,
  RestaurantName,
  ReviewCardBody,
  ReviewCardContainer,
  ReviewCardContents,
  ReviewCardHeader,
  ReviewCardImage,
  ReviewCardInfo,
} from './style';

interface ReviewCardProps extends React.ComponentProps<'div'> {
  imageUrl?: string;
  content: string;
  profileName: string;
  createdAt: string;
  width?: string;
  likes: number;
  id?: string;
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

export const ReviewCard = ({
  imageUrl,
  content,
  profileName,
  createdAt,
  likes,
  width = '100%',
  id,
  ...props
}: ReviewCardProps) => {
  const redirectToProfile = useRedirectToProfile();
  return (
    <ReviewCardContainer width={width} {...props}>
      <ReviewCardHeader>
        <ProfileNickname onClick={() => redirectToProfile(id)}>
          {profileName}
        </ProfileNickname>
        <ElaspedTime>{getElapsedTime(createdAt)}</ElaspedTime>
      </ReviewCardHeader>
      <ReviewCardBody>
        <ReviewCardInfo>
          <RestaurantName>나이스 샤워 역삼점</RestaurantName>
          <LikeContainer>❤ {likes}</LikeContainer>
        </ReviewCardInfo>
        <RestaurantLocation>서울특별시 강남구</RestaurantLocation>
        <ReviewCardImage src={imageUrl} />
        <ReviewCardContents>{content}</ReviewCardContents>
      </ReviewCardBody>
    </ReviewCardContainer>
  );
};
