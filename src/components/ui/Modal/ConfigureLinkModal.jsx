import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import ModalWrapper from './ModalWrapper';
import { useOnClickOutside } from '../../../hooks';
import Button from '../Button';

const LinkFunctions = [
  {
    name: 'Link Protect',
    icon: '',
  },
  {
    name: 'Link timeout',
    icon: '',
  },
  {
    name: 'Click Limit',
    icon: '',
  },
];

function LinkFunction({ functionName, functionIcon }) {
  return (
    <Button
      override
      classNames="flex items-center p-1 pr-4 gap-2 rounded-full bg-gray-300"
    >
      <img
        className="w-5 h-5 rounded-full bg-red-300"
        src={functionIcon}
        alt={functionName}
      />
      <p>{functionName}</p>
    </Button>
  );
}

LinkFunction.propTypes = {
  functionName: PropTypes.string.isRequired,
  functionIcon: PropTypes.string.isRequired,
};

function ConfigureLinkModal({ isOpen, setIsOpen, originalLink }) {
  // const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const closeModal = () => setIsOpen(false);
  useOnClickOutside(modalRef, closeModal);
  return (
    isOpen && (
      <ModalWrapper modalRef={modalRef}>
        <div>
          <h2 className="text-2xl font-bold">Configure your link</h2>
          <p className="text-md mt-1 text-gray-600">
            Original link: {originalLink}
          </p>
        </div>
        <div className="mt-3">
          <h4 className="text-lg font-bold">Add link layer</h4>
          <div className="my-4 grid grid-cols-3 gap-5">
            {LinkFunctions.map((linkFunction) => (
              <LinkFunction
                functionName={linkFunction.name}
                functionIcon={linkFunction.icon}
              />
            ))}
          </div>
          <div className="mt-3 flex items-center justify-center sm:justify-end gap-3 pt-8">
            <Button variant="secondary">Cancel</Button>
            <Button>Create link</Button>
          </div>
        </div>
      </ModalWrapper>
    )
  );
}

ConfigureLinkModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
export default ConfigureLinkModal;
