// import React, { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
// import './App.css'

function DashboardHeader({ currentOption }) {
  // Get the current location from the url
  const navOptions = [
    {
      name: 'Dashboard',
      link: '/dashboard',
    },
    {
      name: 'Settings',
      link: '/settings',
    },
  ];
  return (
    <header className="top-0 flex flex-col justify-between w-full py-4 text-white">
      <nav className="flex justify-between pb-4 mx-12 border-b items-center border-b-gray-900">
        <div className="flex-1">
          <div>LinkCtrl</div>
          <div>AvatarCard princecodes247 / Free trial</div>
        </div>
        <div className="flex justify-end gap-4 items-center">
          <a href="https://www.github.com/princecodes247">Github</a>
          <Button>Shorten it</Button>
        </div>
      </nav>
      <nav className="flex gap-2 px-12 py-2 border-b border-b-gray-900">
        {navOptions.map((option) => (
          <div
            className={`p-5 py-3 transition-all duration-75 bg-gray-400 ${
              option.name === currentOption ? 'bg-opacity-10' : 'bg-opacity-0'
            } rounded hover:bg-opacity-10`}
          >
            <p className="text-sm">{option.name}</p>
          </div>
        ))}
      </nav>
    </header>
  );
}

DashboardHeader.defaultProps = {
  currentOption: 'dashboard',
};

DashboardHeader.propTypes = {
  currentOption: PropTypes.string,
};

export default DashboardHeader;
