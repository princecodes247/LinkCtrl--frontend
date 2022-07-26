// import React, { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

function MainAvatar({ user }) {
  // const { isLink } = props;
  return (
    <div className="flex items-center gap-4">
      <div className="bg-green-400 rounded-full p-5 text-center flex-1" />
      <p>{user.name}</p>
    </div>
  );
}

MainAvatar.defaultProps = {
  user: {},
};

MainAvatar.propTypes = {
  user: PropTypes.object,
};

export default MainAvatar;
