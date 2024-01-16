import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getPostByUser, getPostDetail } from '@/services/Post/post';
import { updateUserName } from '@/services/User/setting';
import { updateProfileImage } from '@/services/User/user';
import { getUser } from '@/services/User/user';
import { UpdateUserNamePayload } from '@/types/payload';

export const useGetPost = (userId: string) => {
  return useQuery({
    queryKey: ['getPostByUserId', userId],
    queryFn: () => getPostByUser({ userId }),
  });
};

export const useChangeImage = (
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setSelectedFile: React.Dispatch<React.SetStateAction<File | File[] | null>>,
) => {
  const queryClient = useQueryClient();
  const { mutate, data } = useMutation({
    mutationFn: updateProfileImage,
    onSuccess: async () => {
      // 이미지 변경 후 추가로직을 여기에 작성
      // 예: 프로필 정보를 다시 불러오는 등의 작업
      await queryClient.refetchQueries(['checkAuthUser']);
      setIsLoading(false); // 로딩 완료 시 isLoading 상태를 false로 설정
      setSelectedFile(null);
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

export const useGetUser = (userId: string) => {
  return useQuery({
    queryKey: ['getUserInfo', userId],
    queryFn: () => getUser(userId),
  });
};

export const useChangeIntroduce = () => {
  const queryClient = useQueryClient();
  const { mutate, data } = useMutation(updateUserName, {
    onSuccess: async () => {
      await queryClient.refetchQueries(['checkAuthUser']);
    },
  });

  const changeIntroduce = async ({
    fullName,
    username,
  }: UpdateUserNamePayload) => {
    try {
      mutate({ fullName, username });
    } catch (error) {
      console.error('자기소개 전송 오류', error);
    }
  };

  return { changeIntroduce, data };
};
