import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { useModal } from '@/hooks/useModal';
import { selectedFileAtom } from '@/recoil/selectedFile';
import { ModalType } from '@/types/modal';

interface ImageUploadProps {
  onFileChange: (file: File | null) => void;
  image: string | null;
  width?: string;
  ratio?: string;
  borderRadius?: string;
}

const UploadContainer = styled.div<{
  width?: string;
  borderRadius?: string;
  ratio?: string;
}>`
  aspect-ratio: ${({ ratio }) => ratio || '5 / 3'}; // 가로 세로 비율
  width: ${({ width }) => width || '100%'};
  flex-shrink: 0;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  border-radius: ${({ borderRadius }) => borderRadius || '0px'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-size: 1rem;
  cursor: pointer;
`;

const ImagePreview = styled.img<{ ratio?: string }>`
  aspect-ratio: ${({ ratio }) => ratio || '5 / 3'}; // 가로 세로 비율
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

/**
 * @summary 사용법 
 * export default function ParentComponent() {
    const [file, setFile] = useState<File | null>(null); // 선택된 파일
    const image = file ? URL.createObjectURL(file) : null; // 파일이 있으면 url을 만들어서 image에 넣어줍니다.
    const handleFileChange = (file: File | null) => {
      setFile(file); // 파일이 선택되면 file state를 업데이트
    };
  return <ImageUpload image={image} onFileChange={handleFileChange} />;
  }
 * @description 공통 ImageUpload 컴포넌트
 * @param image required) image 이미지 경로, 기본 값: null
 * @param onFileChange required) onFileChange 파일 선택 시 외부로 전달할 함수
 * @param width optional) width 이미지 너비, 기본 값: 100%
 * @param ratio optional) ratio 이미지 가로 세로 비율, 기본 값: 5 / 3
 * @param borderRadius optional) borderRadius 이미지 테두리 둥글기, 기본 값: 0px
 * @returns
 */

export default function ImageUpload({
  image,
  width,
  ratio,
  onFileChange,
  borderRadius,
}: ImageUploadProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(
    image || null,
  );

  const selectedFile = useRecoilValue(selectedFileAtom);

  const { openModal } = useModal();

  const handleOpenModal = () => {
    openModal({ type: ModalType.CHANGE_IMAGE });
  };

  useEffect(() => {
    if (selectedFile instanceof File) {
      const fileURL = URL.createObjectURL(selectedFile);
      setSelectedImage(fileURL);
      onFileChange(selectedFile);
    } else {
      onFileChange(null);
    }
  }, [selectedFile]);

  return (
    <section>
      <UploadContainer
        onClick={handleOpenModal}
        borderRadius={borderRadius}
        width={width}
        ratio={ratio}>
        {selectedImage ? (
          <ImagePreview src={selectedImage} alt="이미지 미리보기" />
        ) : (
          <span>이미지 추가</span>
        )}
      </UploadContainer>
    </section>
  );
}
