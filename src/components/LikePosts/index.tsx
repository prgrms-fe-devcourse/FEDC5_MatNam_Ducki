import { useNavigate } from 'react-router-dom';

import { useCheckAuthUser } from '@/hooks/useAuth';
import { useGetPostDetail } from '@/hooks/useGetProfile';
import { PATH } from '@/routes/path';

import { ReviewCard } from '../ReviewCard/ReviewCard';
import { EmptyResultText, EmptyResultWrapper, PostWrapper } from './style';

export default function LikePosts() {
  const navigate = useNavigate();
  const { data: auth } = useCheckAuthUser();

  if (!auth) {
    // auth가 undefined일 아무것도 렌더링하지 않음
    return null;
  }

  const likes = auth.likes.map((item) => item.post); // 사용자의 좋아요한 게시물의 postId

  const detailPosts = likes.map((item) => useGetPostDetail(item).data); // 게시물의 detailPost

  return (
    <PostWrapper>
      {likes && likes.length !== 0 ? (
        <>
          {detailPosts?.map(
            (item) =>
              item && (
                <ReviewCard
                  key={item._id}
                  imageUrl={item.image}
                  profileName={item.author.fullName}
                  createdAt={item.createdAt}
                  restaurant={item.restaurant}
                  location={item.location}
                  review={item.review}
                  likes={item.likes.length}
                  channelId={item.channel._id}
                  id={item.author._id}
                  onClick={() => navigate(`${PATH.REVIEWDETAIL}/${item._id}`)}
                />
              ),
          )}
        </>
      ) : (
        <EmptyResultWrapper>
          <EmptyResultText>
            좋아요를 눌러서
            <EmptyResultText>
              더 많은 사람들이 볼 수 있게 해주세요! 🚀
            </EmptyResultText>
          </EmptyResultText>
        </EmptyResultWrapper>
      )}
    </PostWrapper>
  );
}
