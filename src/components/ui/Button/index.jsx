// import React, { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button({ to, children }) {
  // const { isLink } = props;
  return to.length > 0 ? (
    <Link className="bg-green-400 p-5 text-center py-3 flex-1" to={`/${to}`}>
      {children}
    </Link>
  ) : (
    <button className="bg-red-400 text-center p-5 py-3 flex-1" type="button">
      {children}
    </button>
  );
}

Button.defaultProps = {
  to: '',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
};

export default Button;
