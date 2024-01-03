import styled from '@emotion/styled';
import React, { useEffect, useRef, useState } from 'react';

interface ImageUploadProps {
  image: File | null;
  onFileChange: (file: File | null) => void;
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
  border: 1px solid gray;
  border-radius: ${({ borderRadius }) => borderRadius || '0px'};
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const ImagePreview = styled.img<{ ratio?: string }>`
  aspect-ratio: ${({ ratio }) => ratio || '5 / 3'}; // 가로 세로 비율
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 10%;
  left: 20%;
  right: 20%;
`;

/**
 * @summary 사용법 <ImageUpload image={file} onFileChange={handleFileChange} />
 * @description 공통 ImageUpload 컴포넌트
 * @param image 상위 컴포넌트에서 받아온 이미지
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  // 이미지 파일이 변경될 때마다 미리보기 URL을 업데이트
  useEffect(() => {
    if (!image) {
      setSelectedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setSelectedImage(fileReader.result as string);
    };
    fileReader.readAsDataURL(image);
  }, [image]);

  const handleImageFilesChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (!event.target.files || event.target.files.length === 0) {
      onFileChange(null);
      return;
    }

    const file = event.target.files[0];
    onFileChange(file); // 부모 컴포넌트로 파일 전달
  };

  const handleImageRemove = () => {
    setSelectedImage(null);
    onFileChange(null); // 이미지 제거 시 부모 컴포넌트에도 null 전달
  };

  const handleImageInputClick = () => {
    imageInputRef.current?.click();
  };

  return (
    <section>
      <input
        ref={imageInputRef}
        onChange={handleImageFilesChange}
        type="file"
        accept="image/*"
        style={{ display: 'none' }} // 숨김 처리
      />
      <UploadContainer
        onClick={handleImageInputClick}
        borderRadius={borderRadius}
        width={width}
        ratio={ratio}>
        {selectedImage ? (
          <>
            <ImagePreview src={selectedImage} alt="이미지 미리보기" />
            <ButtonContainer>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleImageRemove();
                }}
                type="button">
                삭제
              </button>
            </ButtonContainer>
          </>
        ) : (
          <span>이미지 추가</span>
        )}
      </UploadContainer>
    </section>
  );
}
