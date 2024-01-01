import styled from '@emotion/styled';
import React, { useRef } from 'react';

interface ImageUploadProps {
  image: string | null;
  onFileChange: (file: File | null) => void;
  onImageRemove: () => void;
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
 * @summary 사용법 <ImageUpload
      image={image}
      onFileChange={handleFileChange}
      onImageRemove={handleImageRemove}
      width="10%"
      ratio="1 / 1"
    />
 * @description 공통 ImageUpload 컴포넌트
 * @param image 상위 컴포넌트에서 받아온 이미지
 * @param onFileChange 이미지 변경 시 호출되는 함수
 * @param onImageRemove 이미지 삭제 시 호출되는 함수
 * @param width optional) width 이미지 너비, 기본 값: 100%
 * @param ratio optional) ratio 이미지 가로 세로 비율, 기본 값: 5 / 3
 * @param borderRadius optional) borderRadius 이미지 테두리 둥글기, 기본 값: 0px
 * @returns
 */

export default function ImageUpload({
  image,
  onFileChange,
  onImageRemove,
  width,
  ratio,
  borderRadius,
}: ImageUploadProps) {
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleImageFilesChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }

    onFileChange(event.target.files[0]);
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
      {image ? (
        <UploadContainer
          borderRadius={borderRadius}
          width={width}
          ratio={ratio}>
          <ImagePreview src={image} alt="이미지 미리보기" />
          <ButtonContainer>
            <button onClick={onImageRemove} type="button">
              삭제
            </button>
            <button onClick={handleImageInputClick} type="button">
              변경
            </button>
          </ButtonContainer>
        </UploadContainer>
      ) : (
        <UploadContainer
          onClick={handleImageInputClick}
          borderRadius={borderRadius}
          width={width}
          ratio={ratio}>
          <span>이미지 추가</span>
        </UploadContainer>
      )}
    </section>
  );
}
