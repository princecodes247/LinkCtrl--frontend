// import React, { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

function MainAvatar({ user }) {
  // const { isLink } = props;
  return (
    <div className="bg-green-400 p-5 text-center py-3 flex-1">
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
