export const TOP_POSITIONS = {
  LEFT: 'top-left',
  CENTER: 'top-center',
  RIGHT: 'top-right',
};

export const BOTTOM_POSITIONS = {
  LEFT: 'bottom-left',
  CENTER: 'bottom-center',
  RIGHT: 'bottom-right',
};

export const getPositionStyle = (position: string, index: number) => {
  const offset = 4 * index; // 토스트 메시지의 높이와 간격을 고려하여 offset을 계산
  switch (position) {
    case TOP_POSITIONS.LEFT:
    case TOP_POSITIONS.CENTER:
    case TOP_POSITIONS.RIGHT:
      return `
          top: calc(5rem + ${offset}rem); // 기존 위치에 offset을 더함
          ${position.includes('left') ? 'left: 0;' : ''}
          ${position.includes('right') ? 'right: 0;' : ''}
          ${position.includes('center') ? 'left: 40%;' : ''}
        `;
    case BOTTOM_POSITIONS.LEFT:
    case BOTTOM_POSITIONS.CENTER:
    case BOTTOM_POSITIONS.RIGHT:
      return `
          bottom: calc(7rem + ${offset}rem); // 기존 위치에 offset을 더함
          ${position.includes('left') ? 'left: 0;' : ''}
          ${position.includes('right') ? 'right: 0;' : ''}
          ${position.includes('center') ? 'left: 40%;' : ''}
        `;
    default:
      return `
          top: calc(3rem + ${offset}rem);
          left: 40%;
        `;
  }
};
