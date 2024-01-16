import { useEffect, useState } from 'react';

import { DEFAULT_PROFILE_IMAGE } from '@/constants/avatar';

export type AvatarSize = 'large' | 'small';

export interface PropsAvatar extends React.ComponentProps<'img'> {
  imageUrl?: string;
  size: AvatarSize;
  borderRadius?: number;
}

import { ImageComponent } from './style';

export default function Avatar({
  imageUrl,
  size,
  borderRadius = 50,
  ...props
}: PropsAvatar) {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const defaultAvatar = DEFAULT_PROFILE_IMAGE;

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

  const getSizeValue = () => {
    return size === 'large' ? '80px' : '50px';
  };

  return (
    <ImageComponent
      src={hasError ? defaultAvatar : imageUrl || defaultAvatar}
      width={getSizeValue()}
      height={getSizeValue()}
      borderRadius={borderRadius}
      alt="profile_image"
      style={{ opacity: loaded ? 1 : 0 }}
      {...props}></ImageComponent>
  );
}
