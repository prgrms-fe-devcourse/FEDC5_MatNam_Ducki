import styled from '@emotion/styled';
import React, { useRef, useState } from 'react';

interface PropsProfileImage {
  onFileChange: (file: File | null) => void;
  size?: string;
}

const UploadContainer = styled.div<{
  size?: string;
}>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
`;

const ImagePreview = styled.img`
  aspect-ratio: 5 / 5;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid #cdcdcd;
  background-color: #eee;
  cursor: pointer;
`;

export default function ProfileImage({
  size = '60px',
  onFileChange,
}: PropsProfileImage) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const defaultAvatar = '../../../public/vite.svg';

  const handleImageFilesChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }

    const file = event.target.files[0];
    const fileURL = URL.createObjectURL(file);
    setSelectedImage(fileURL);
    onFileChange(file);
  };

  const handleImageInputClick = () => {
    imageInputRef.current?.click();
  };

  return (
    <>
      <input
        ref={imageInputRef}
        onChange={handleImageFilesChange}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
      />
      <UploadContainer onClick={handleImageInputClick} size={size}>
        <>
          <ImagePreview
            src={selectedImage || defaultAvatar}
            alt="프로필 사진"
          />
        </>
      </UploadContainer>
    </>
  );
}
