export type ModalStateType = {
  type: ModalType;
  isOverlay?: boolean;
  isCloseButton?: boolean;
};

export enum ModalType {
  CHANGE_IMAGE = 'CHANGE_IMAGE',
  VIEW_FOLLOW = 'VIEW_FOLLOW',
}

export const MODAL_PROPS_BY_TYPE = [
  {
    type: ModalType.CHANGE_IMAGE,
    isCloseButton: false,
  },
];
