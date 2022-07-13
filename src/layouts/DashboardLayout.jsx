import React from 'react';
import { useParams } from 'react-router-dom';
// import React, { useState } from 'react';
import PropTypes from 'prop-types';

function DashboardLayout({ children }) {
  const params = useParams();
  return (
    <main className="flex flex-col md:flex-row justify-center md:h-screen">
      <section className=" flex-1">{params.auth}</section>
      <section className="flex-1 flex flex-col text-white bg-gray-800 p-4 justify-center items-center md:items-stretch">
        {children}
      </section>
    </main>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
