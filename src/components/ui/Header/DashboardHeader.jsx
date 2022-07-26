// import React, { useState } from 'react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';
import Button from '../Button';
// import './App.css'
import Avatar from '../Avatar';

function DashboardHeader({ user }) {
  // Get the current location from the url
  const location = useLocation();

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
        <div className="flex-1 flex items-center gap-8 px-6">
          <div>LinkCtrl</div>
          <div className="items-center hidden md:flex gap-3">
            <Avatar user={{ name: 'princecodes247' }} />{' '}
            <p>
              {' '}
              || <span className="p-2 ml-3 rounded bg-red-400">Free trial</span>
            </p>
          </div>
        </div>
        <div className="md:flex hidden justify-end gap-4 items-center">
          <a
            className="text-gray-300 hover:text-white"
            href="https://www.github.com/princecodes247"
          >
            Github
          </a>
          <Button variant="warning">Log Out</Button>
        </div>
        <button type="button" className="md:hidden">
          E
        </button>
      </nav>
      <nav className="flex gap-2 px-12 py-2 border-b border-b-gray-900">
        {navOptions.map((option) => (
          <Link to={option.link}>
            <div
              className={`p-5 py-3 transition-all duration-75 bg-gray-400 ${
                option.link === location.pathname
                  ? 'bg-opacity-10'
                  : 'bg-opacity-0'
              } rounded hover:bg-opacity-10`}
            >
              <p className="text-sm">{option.name}</p>
            </div>
          </Link>
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
