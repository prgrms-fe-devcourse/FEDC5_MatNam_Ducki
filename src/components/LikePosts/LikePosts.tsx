import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import { ReviewCard } from '../ReviewCard/ReviewCard';

interface ReviewCardProps {
  imageUrl: string;
  content: string;
  profileName: string;
  profileImage: string;
  width?: string;
}

const PostWrapper = styled.div`
  margin-top: 30px;
`;

const PostHeader = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
`;

const PostLengthTitle = styled.span`
  font-size: 18px;
`;

const EmptyPostTitle = styled.div`
  margin-top: 10px;
  color: #777777;
`;

export default function LikePosts() {
  const [post, setPost] = useState<ReviewCardProps[]>([]);

  useEffect(() => {
    // 임시로 하드코딩된 데이터 사용
    const fetchedPosts: ReviewCardProps[] = [
      // {
      //   imageUrl: 'image_url_1',
      //   content: '내용 1',
      //   profileName: '더기',
      //   profileImage: '../../../public/vite.svg',
      //   width: '200px',
      // },
      // {
      //   imageUrl: 'image_url_2',
      //   content: '내용 2',
      //   profileName: '더기',
      //   profileImage: '../../../public/vite.svg',
      //   width: '200px',
      // },
      // {
      //   imageUrl: 'image_url_1',
      //   content: '내용 1',
      //   profileName: '경빈',
      //   profileImage: '../../../public/vite.svg',
      //   width: '200px',
      // },
      // {
      //   imageUrl: 'image_url_2',
      //   content: '내용 2',
      //   profileName: '경빈',
      //   profileImage: '../../../public/vite.svg',
      //   width: '200px',
      // },
      // {
      //   imageUrl: 'image_url_2',
      //   content: '내용 2',
      //   profileName: '더기',
      //   profileImage: '../../../public/vite.svg',
      //   width: '200px',
      // },
    ];
    const LikePosts = fetchedPosts.filter(
      (post) => post.profileName === '더기',
    );

    setPost(LikePosts);
  }, []);

  return (
    <PostWrapper>
      {post.length !== 0 ? (
        <>
          <PostHeader>
            포스트 <PostLengthTitle>{post.length}개</PostLengthTitle>
          </PostHeader>
          {post.map((props) => (
            <ReviewCard key={props.imageUrl} {...props} />
          ))}
        </>
      ) : (
        <>
          <PostHeader>좋아요 목록</PostHeader>
          <EmptyPostTitle>아직 좋아요한 목록 없습니다.</EmptyPostTitle>
        </>
      )}
    </PostWrapper>
  );
}
