import styled from '@emotion/styled';

import { theme } from '@/styles/Theme';

export const ReviewImageUploadWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  height: 13.5rem;
`;

export const UploadContainer = styled.div`
  width: 8.5rem;
  height: 8.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  color: ${theme.colors.gray};
  cursor: pointer;
  flex-shrink: 0;
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

export const ImageListWrapper = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0.4rem;
  overflow: auto;
`;

export const ImagePreviewWrapper = styled.li`
  flex-shrink: 0;
  position: relative;
`;

export const ImagePreview = styled.img`
  width: 12.5rem;
  height: 12.5rem;
  object-fit: contain;
  border-radius: 1rem;
  flex-shrink: 0;
  border: 1px solid ${theme.colors.lightGray};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const ImageRemoveButton = styled.button`
  width: 1rem;
  height: 1rem;
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  z-index: 100;
  color: black;
`;
