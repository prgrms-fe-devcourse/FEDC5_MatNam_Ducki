import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

export interface PropsAvatar {
  imageUrl: string | null;
  size: string | number;
  borderRadius?: number;
}

const ImageComponent = styled.img<{ borderRadius: number }>`
  object-fit: cover;
  border: 1px solid #cdcdcd;
  transition: opacity 0.2s ease-out;
  background-color: #eee;
  border-radius: ${(props) => props.borderRadius}%;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  cursor: pointer;
`;

export default function Avatar({
  imageUrl,
  size,
  borderRadius = 50,
}: PropsAvatar) {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const defaultAvatar = '../../../public/vite.svg';

  useEffect(() => {
    const image = new Image();
    const imageUrlToLoad = imageUrl || defaultAvatar;

    image.onload = () => {
      setLoaded(true);
    };

    image.onerror = () => {
      console.error('Error loading image:', imageUrlToLoad);
      setHasError(true);
      setLoaded(true);
    };

    image.src = imageUrlToLoad;
  }, [imageUrl, defaultAvatar]);

  return (
    <ImageComponent
      src={hasError ? defaultAvatar : imageUrl || defaultAvatar}
      width={size}
      height={size}
      borderRadius={borderRadius}
      alt="profile_image"
      style={{ opacity: loaded ? 1 : 0 }}></ImageComponent>
  );
}
