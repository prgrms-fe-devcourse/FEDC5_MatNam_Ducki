import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { useModal } from '@/hooks/useModal';
import { reviewAtom } from '@/recoil/review';
import { selectedFileAtom } from '@/recoil/selectedFile';
import { ModalType } from '@/types/modal';
import { convertFileToURL } from '@/utils/file';

import CloseFilledIcon from '../Icons/CloseFilledIcon';
import PhotoIcon from '../Icons/PhotoIcon';
import {
  ImageListWrapper,
  ImagePreview,
  ImagePreviewWrapper,
  ImageRemoveButton,
  ReviewImageUploadWrapper,
  UploadContainer,
} from './style';

interface ImageUploadProps {
  defaultImage?: string | null;
}

export default function ReviewImageUpload({ defaultImage }: ImageUploadProps) {
  const [reviewState, setReviewState] = useRecoilState(reviewAtom);
  const [selectedFile, setSelectedFile] = useRecoilState(selectedFileAtom);

  const [selectedImage, setSelectedImage] = useState<string | null>(
    defaultImage ? defaultImage : null,
  );

  const { openModal } = useModal();

  const handleOpenModal = () => {
    openModal({ type: ModalType.CHANGE_IMAGE });
  };

  const handleRemoveFile = () => {
    setReviewState((prev) => ({ ...prev, image: null }));
  };

  useEffect(() => {
    console.log(selectedImage);
  }, [selectedImage]);

  useEffect(() => {
    const { image } = reviewState;

    if (!image) {
      setSelectedImage(null);
    } else {
      if (image instanceof File) {
        setSelectedImage(convertFileToURL(image));
      } else {
        setSelectedImage(image);
      }
    }
  }, [reviewState.image]);

  useEffect(() => {
    if (Array.isArray(selectedFile) && selectedFile[0] instanceof File) {
      const file = selectedFile[0];
      setReviewState((prev) => ({ ...prev, image: file }));

      setSelectedFile(null);
    }
  }, [selectedFile]);

  return (
    <ReviewImageUploadWrapper>
      <UploadContainer onClick={handleOpenModal}>
        <PhotoIcon />
      </UploadContainer>
      <ImageListWrapper>
        {selectedImage && (
          <ImagePreviewWrapper>
            <ImagePreview src={selectedImage} alt="이미지 미리보기" />
            <ImageRemoveButton type="button" onClick={handleRemoveFile}>
              <CloseFilledIcon />
            </ImageRemoveButton>
          </ImagePreviewWrapper>
        )}
      </ImageListWrapper>
    </ReviewImageUploadWrapper>
  );
}
