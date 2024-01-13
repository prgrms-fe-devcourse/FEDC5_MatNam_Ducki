import styled from '@emotion/styled';

export const UploadContainer = styled.div<{
  size?: string;
}>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
`;

export const ImagePreview = styled.img`
  aspect-ratio: 5 / 5;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid #cdcdcd;
  background-color: #eee;
  cursor: pointer;
`;
