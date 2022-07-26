import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

function ModalWrapper({ modalRef, children }) {
  return (
    <div className="fixed flex items-center top-0 left-0 h-screen w-screen overflow-auto flex item-center justify-center bg-opacity-80 bg-black">
      <div className="bg-gray-900 p-9 rounded" ref={modalRef}>
        {children}
      </div>
    </div>
  );
}

ModalWrapper.propTypes = {
  // isOpen: PropTypes.bool.isRequired,
  modalRef: PropTypes.any,
  children: PropTypes.node.isRequired,
};

export default ModalWrapper;
