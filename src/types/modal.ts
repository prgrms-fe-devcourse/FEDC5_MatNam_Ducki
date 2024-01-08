export type ModalStateType = {
  type: ModalType;
  isOverlay?: boolean;
  isCloseButton?: boolean;
};

export enum ModalType {
  CHANGE_IMAGE = 'CHANGE_IMAGE',
}
