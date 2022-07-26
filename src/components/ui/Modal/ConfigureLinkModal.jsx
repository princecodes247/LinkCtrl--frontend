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

function ConfigureLinkModal({
  isOpen,
  setIsOpen,
  originalLink,
  handlerFunction,
}) {
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
          <div className="mt-8">
            <h5>Link Protect</h5>
            <div className="flex gap-5">
              <div className="h-8 w-7 bg-red-400" />
              <div className="h-8 w-7 bg-red-400" />
            </div>

            <label htmlFor="linkPassword" className="w-full">
              <p className="text-sm text-gray-300">Your password</p>
              <input
                type="password"
                className="form-control p-3 rounded flex-1 w-full bg-opacity-50 bg-gray-800"
                id="linkPassword"
                aria-describedby="Link Protect Password"
                placeholder="Enter password"
              />
            </label>
          </div>
          <div className="mt-8">
            <h5>Link Timeout</h5>

            <div className="flex gap-3 items-center">
              <button type="button">30m</button>
              <button type="button">2hr</button>
              <button type="button">1day</button>
              <label htmlFor="linkTimeout" className="w-full">
                {/* <p>Link timeout duration (in hours)</p> */}
                <input
                  type="number"
                  className="form-control p-3 rounded flex-1 w-full bg-opacity-50 bg-gray-800"
                  id="linkTimeout"
                  aria-describedby="emailHelp"
                  placeholder="Enter timeout duration in hours"
                />
              </label>
            </div>
          </div>
          <div className="mt-8">
            <h5>Click Limit</h5>

            <label htmlFor="linkTimeout" className="w-full">
              {/* <p>Link timeout duration (in hours)</p> */}
              <input
                type="number"
                className="form-control p-3 rounded flex-1 w-full bg-opacity-50 bg-gray-800"
                id="linkTimeout"
                aria-describedby="emailHelp"
                placeholder="Number of total clicks allowed"
              />
            </label>
          </div>
          <div className="mt-3 flex items-center justify-center sm:justify-end gap-3 pt-8">
            <Button onClick={closeModal} variant="secondary">
              Cancel
            </Button>
            <Button onClick={handlerFunction}>Create link</Button>
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
