import React from 'react';
import { useParams } from 'react-router-dom';
// import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AuthLayout({ children }) {
  const params = useParams();
  return (
    <main className="flex flex-col md:flex-row justify-center md:h-screen">
      <section className="flex-1 flex flex-col text-white  p-4 justify-center items-center">
        {children}
      </section>
    </main>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
