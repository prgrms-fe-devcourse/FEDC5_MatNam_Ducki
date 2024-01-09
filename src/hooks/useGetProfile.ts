import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { checkAuthUser } from '@/services/Auth/auth';
import { getPostByUser } from '@/services/Post/post';
import { updateProfileImage } from '@/services/User/user';

export const useProfile = () => {
  return useQuery({
    queryKey: ['authUser'],
    queryFn: checkAuthUser,
  });
};

export const useGetPost = (userId: string) => {
  return useQuery({
    queryKey: ['userId', userId],
    queryFn: () => getPostByUser({ userId }),
  });
};

export const useChangeImage = () => {
  const queryClient = useQueryClient();
  const { mutate, data } = useMutation({
    mutationFn: updateProfileImage,
    onSuccess: async () => {
      console.log('사진 바꾸기 완료');
      // 이미지 변경 후 추가로직을 여기에 작성
      // 예: 프로필 정보를 다시 불러오는 등의 작업
      await queryClient.refetchQueries(['authUser']);
    },
  });

  const changeImage = async (image: any, isCover = false) => {
    try {
      mutate({ image, isCover });
    } catch (error) {
      console.error('사진 전송 오류', error);
    }
  };

  return { changeImage, data };
};
