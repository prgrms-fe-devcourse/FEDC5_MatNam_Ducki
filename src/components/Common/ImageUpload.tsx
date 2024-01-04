import styled from '@emotion/styled';
import React, { useRef, useState } from 'react';

interface ImageUploadProps {
  onFileChange: (file: File | null) => void;
  image?: string | null;
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
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleImageFilesChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }

    const file = event.target.files[0];
    const fileURL = URL.createObjectURL(file);
    setSelectedImage(fileURL);
    onFileChange(file); // 선택된 파일을 외부로 전달
  };

  const handleImageRemove = () => {
    if (selectedImage) {
      URL.revokeObjectURL(selectedImage);
      setSelectedImage(null);
    }

    // 'current'가 존재하는지 확인 후, input의 value를 리셋하여 같은 파일이 다시 업로드될 수 있게 합니다.
    if (imageInputRef.current) {
      imageInputRef.current.value = '';
    }

    onFileChange(null); // 이미지 제거 시 외부에 null을 전달
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
