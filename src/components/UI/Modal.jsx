import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";

const Backdrop = ({ onClose }) => {
  return <StyledBackdrop onClick={onClose} />;
};

const ModalContent = (props) => {
  return (
    <StyledModal>
      <StyledContent>{props.children}</StyledContent>
    </StyledModal>
  );
};

const modal = document.getElementById("modal");
const backdrop = document.getElementById("drop");

export const Modal = ({ children, onClose, isOpen }) => {
  return (
    isOpen && (
      <>
        {createPortal(<Backdrop onClose={onClose} />, backdrop)}
        {createPortal(<ModalContent children={children} />, modal)}
      </>
    )
  );
};

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

const StyledContent = styled.div``;

const slideDown = keyframes`
  from {
    transform: translateX(-3rem);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const StyledModal = styled.div`
  position: fixed;
  top: 20vh;
  left: 25%;
  width: 50%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: ${slideDown} 300ms ease-out forwards;
`;
