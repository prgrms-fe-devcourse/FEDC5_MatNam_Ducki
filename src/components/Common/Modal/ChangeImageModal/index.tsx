import { useModal } from '@/hooks/useModal';
import { ModalType } from '@/types/modal';

import { ChangeImageModalWrapper, SelectItem, SelectList } from './style';

export default function ChangeImageModal() {
  const { closeModal } = useModal();

  const selectListData = [
    { text: '이미지 변경', onClick: () => {} },
    { text: '기본 이미지로 변경', onClick: () => {} },
    {
      text: '취소',
      onClick: () => {
        closeModal({ type: ModalType.CHANGE_IMAGE });
      },
    },
  ];

  return (
    <ChangeImageModalWrapper>
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
