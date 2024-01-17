import styled from '@emotion/styled';

export const BaseModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #00000090;
  z-index: 100;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 100;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 0.2rem;
`;

export const Modal = styled.div`
  width: 100%;
  background-color: rgb(255, 255, 255);
  border-radius: 1rem;
`;
