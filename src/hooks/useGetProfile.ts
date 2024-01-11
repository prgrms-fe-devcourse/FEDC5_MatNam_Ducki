import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getPostByUser, getPostDetail } from '@/services/Post/post';
import { updateProfileImage } from '@/services/User/user';

export const useGetPost = (userId: string) => {
  return useQuery({
    queryKey: ['getPostByUserId', userId],
    queryFn: () => getPostByUser({ userId }),
  });
};

export const useChangeImage = (
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const queryClient = useQueryClient();
  const { mutate, data } = useMutation({
    mutationFn: updateProfileImage,
    onSuccess: async () => {
      // 이미지 변경 후 추가로직을 여기에 작성
      // 예: 프로필 정보를 다시 불러오는 등의 작업
      console.log('이미지 바뀜');
      await queryClient.refetchQueries(['checkAuthUser']);
      setIsLoading(false); // 로딩 완료 시 isLoading 상태를 false로 설정
    },
  });

  const changeImage = async (image: File, isCover = false) => {
    try {
      setIsLoading(true); // 이미지 변경 시작 시 isLoading 상태를 true로 설정
      mutate({ image, isCover });
    } catch (error) {
      console.error('사진 전송 오류', error);
      setIsLoading(false); // 오류 발생 시 isLoading 상태를 false로 설정
    }
  };

  return { changeImage, data };
};

export const useGetPostDetail = (postId: string) => {
  return useQuery({
    queryKey: ['postId', postId],
    queryFn: () => getPostDetail(postId),
  });
};
