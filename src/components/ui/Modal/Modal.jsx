import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import ModalWrapper from './ModalWrapper';
import { useOnClickOutside } from '../../../hooks';
import Button from '../Button';

function Modal({ isOpen, setIsOpen data }) {
  // const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const closeModal = () => setIsOpen(false);
  useOnClickOutside(modalRef, closeModal);
  return (
    isOpen && (
      <ModalWrapper modalRef={modalRef}>
        <div className="flex w-full justify-end">
          <Button variant="transparent" onClick={closeModal}>
            c
          </Button>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center ">
          <p className="w-24 h-24 bg-gray-400">img</p>
          <h3 className="text-2xl mt-5 mb-1 font-semibold">
            {data.title || "Operation Completed"}
          </h3>
          <p className="mb-4">{data.body || "Your link was shortened successfully"}</p>
          <Button> {data.title || "Operation Completed"}Go to Link Dashboard</Button>
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
