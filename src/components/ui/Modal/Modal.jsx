import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import ModalWrapper from './ModalWrapper';
import { useOnClickOutside } from '../../../hooks';
import Button from '../Button';

function Modal({ isOpen, setIsOpen }) {
  // const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const closeModal = () => setIsOpen(false);
  useOnClickOutside(modalRef, closeModal);
  return (
    isOpen && (
      <ModalWrapper modalRef={modalRef}>
        <div className="flex w-full justify-end">
          <Button onClick={closeModal}>c</Button>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div>
            <p>img</p>
            <h3>Admin User Edit Complete</h3>
            <p>Your edit was successfully</p>
          </div>
        </div>
      </ModalWrapper>
    )
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default Modal;
