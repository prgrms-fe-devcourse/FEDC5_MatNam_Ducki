export interface PropsIntroductionEditor {
  isEditing: boolean;
  introduction: string;
  onEditButtonClick: () => void;
  onFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholderText: string;
  buttonText: string;
}

export interface PropsUserInfo {
  userName: string;
  userId: string;
}
