import { useRef } from 'react';
import { useSetRecoilState } from 'recoil';

import { DEFAULT_PROFILE_IMAGE } from '@/constants/profile';
import { useModal } from '@/hooks/useModal';
import { selectedFileAtom } from '@/recoil/selectedFile';
import { ModalType } from '@/types/modal';
import { convertURLtoFile } from '@/utils/file';

import {
  ChangeImageModalWrapper,
  ImageSelectInput,
  SelectItem,
  SelectList,
} from './style';

export default function ChangeImageModal() {
  const { closeModal } = useModal();
  const setSelectedFile = useSetRecoilState(selectedFileAtom);

  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpdate = () => {
    imageInputRef.current?.click();
  };

  const handleCloseModal = () => {
    closeModal({ type: ModalType.CHANGE_IMAGE });
  };

  const handleImageFilesChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }

    const selectedFile = event.target.files[0];
    setSelectedFile(selectedFile);
    handleCloseModal();
  };

  const handleImageRemove = async () => {
    if (imageInputRef.current) {
      imageInputRef.current.value = '';
    }

    const defaultImageFile = await convertURLtoFile(DEFAULT_PROFILE_IMAGE);
    setSelectedFile(defaultImageFile);
    handleCloseModal();
  };

  const selectListData = [
    { text: '이미지 변경', onClick: handleImageUpdate },
    { text: '기본 이미지로 변경', onClick: handleImageRemove },
    {
      text: '취소',
      onClick: () => {
        closeModal({ type: ModalType.CHANGE_IMAGE });
      },
    },
  ];

  return (
    <ChangeImageModalWrapper>
      <ImageSelectInput
        ref={imageInputRef}
        onChange={handleImageFilesChange}
        type="file"
        accept="image/*"
      />
      <SelectList>
        {selectListData.map(({ text, onClick }) => (
          <SelectItem key={text} onClick={onClick}>
            {text}
          </SelectItem>
        ))}
      </SelectList>
    </ChangeImageModalWrapper>
  );
}
