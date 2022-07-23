import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import ModalWrapper from './ModalWrapper';
import { useOnClickOutside } from '../../../hooks';
import Button from '../Button/index';

function Dialog({ isOpen, setIsOpen, children }) {
  // const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const closeModal = () => setIsOpen(false);
  useOnClickOutside(modalRef, closeModal);
  return isOpen && <ModalWrapper modalRef={modalRef}>{children}</ModalWrapper>;
}

Dialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
export default Dialog;
