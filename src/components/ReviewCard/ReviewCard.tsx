import styled from '@emotion/styled';

interface ReviewCardProps {
  imageUrl: string;
  content: string;
  profileName: string;
  profileImage: string;
  width?: string;
}

const ReviewCardContainer = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  margin: 0 auto;
  border-radius: 0.5rem;
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

const ProfilImage = styled.img`
  width: 2rem;
  border-radius: 50%;
  background-color: #bdbdbd;
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
  border-radius: 0.5rem;
`;

const ReviewCardInfo = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

const RestaurantName = styled.div`
  font-weight: bold;
`;

const RestaurantLocation = styled.div`
  color: #828282;
`;

export const ReviewCard = ({
  imageUrl,
  content,
  profileName,
  profileImage,
  width = '80%',
  ...props
}: ReviewCardProps) => {
  return (
    <ReviewCardContainer width={width} {...props}>
      <ReviewCardHeader>
        <ProfileContainer>
          <ProfilImage src={profileImage} />
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
