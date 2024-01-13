import React, { useRef, useState } from 'react';

import { ImagePreview, UploadContainer } from './style';

interface PropsProfileImage {
  onFileChange: (file: File | null) => void;
  size?: string;
}

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
