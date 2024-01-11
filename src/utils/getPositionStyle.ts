export const getPositionStyle = (position: string) => {
  switch (position) {
    case 'top-left':
      return `
          top: 3rem;
          left: 0;
        `;
    case 'top-right':
      return `
          top: 3rem;
          right: 0;
        `;
    case 'top-center':
      return `
          top: 3rem;
          left: 40%;
        `;
    case 'bottom-left':
      return `
          bottom: 5rem;
          left: 0;
        `;
    case 'bottom-right':
      return `
          bottom: 5rem;
          right: 0;
        `;
    case 'bottom-center':
      return `
          bottom: 5rem;
          left: 40%;
        `;
    default:
      return `
          top: 3rem;
          left: 40%;
        `;
  }
};
