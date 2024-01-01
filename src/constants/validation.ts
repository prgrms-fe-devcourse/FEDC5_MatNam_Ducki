export const INPUT_VALIDATION = {
  FULLNAME: {
    minLength: {
      value: 2,
      message: '최소 2글자 이상 입력해 주세요.',
    },
  },
  EMAIL: {
    pattern: {
      value:
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
      message: '이메일 형식과 맞지 않습니다.',
    },
  },
  PASSWORD: {
    minLength: {
      value: 8,
      message: '최소 8자리 이상 입력해 주세요.',
    },
    pattern: {
      value: /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[a-z\d!@#$%^&*]{8,}$/i,
      message: '영어 소문자, 숫자, 특수문자를 각각 1개 이상 포함해야 합니다.',
    },
  },
};
