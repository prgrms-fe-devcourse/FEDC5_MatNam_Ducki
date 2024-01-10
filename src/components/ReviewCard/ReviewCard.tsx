import styled from '@emotion/styled';

interface ReviewCardProps {
  imageUrl?: string;
  content: string;
  profileName: string;
  width?: string;
}

const ReviewCardContainer = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  margin: 0 auto;
  border-radius: 1rem;
  border: 1px solid #bdbdbd;
  box-shadow: 0px 1.5px 1.5px rgba(0, 0, 0, 0.25);
`;

const ReviewCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ProfileNickname = styled.span`
  cursor: pointer;
`;

const ReviewCardBody = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ReviewCardContents = styled.div``;

const ReviewCardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5%;
`;

const ReviewCardInfo = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  border-radius: 5%;
  padding: 0.5rem;
`;

const RestaurantName = styled.div`
  font-weight: bold;
`;

const RestaurantLocation = styled.div`
  color: #828282;
`;

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
  width = '80%',
  ...props
}: ReviewCardProps) => {
  return (
    <ReviewCardContainer width={width} {...props}>
      <ReviewCardHeader>
        <ProfileContainer>
          <ProfileNickname>{profileName}</ProfileNickname>
        </ProfileContainer>
        <div>5분 전</div>
      </ReviewCardHeader>
      <ReviewCardBody>
        <ReviewCardContents>{content}</ReviewCardContents>
        <ReviewCardImage src={imageUrl} />
        <ReviewCardInfo>
          <RestaurantName>Five Guys</RestaurantName>
          <RestaurantLocation>서울특별시 강남구</RestaurantLocation>
        </ReviewCardInfo>
      </ReviewCardBody>
    </ReviewCardContainer>
  );
};
