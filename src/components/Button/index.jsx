// import React, { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

function Button({ children }) {
  return (
    <button className="bg-red-400 p-5 py-3 flex-1" type="button">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
