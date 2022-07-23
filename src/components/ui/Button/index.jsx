// import React, { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const styles = (override, variant, outline, classNames) =>
  clsx([
    !override && [
      variant === 'secondary'
        ? [
            outline
              ? 'border border-white'
              : 'bg-gray-600 bg-opacity-60 hover:bg-opacity-80',
          ]
        : 'bg-green-400 hover:brightness-110',
      'px-8 py-3 rounded text-center text-white active:brightness-75',
    ],
    classNames,
  ]);
function Button({
  to,
  override,
  variant,
  outline,
  classNames,
  children,
  onClick,
}) {
  // override, variant, outline, classNames
  // const { isLink } = props;
  return to.length > 0 ? (
    <Link
      className={styles(override, variant, outline, classNames)}
      to={`/${to}`}
      onClick={onClick}
    >
      {children}
    </Link>
  ) : (
    <button
      className={styles(override, variant, outline, classNames)}
      type="button"
      onClick={onClick}
    >
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
