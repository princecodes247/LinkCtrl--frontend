import React from 'react';
import { useParams } from 'react-router-dom';
// import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DashboardHeader } from '../ui/Header';
import Footer from '../ui/Footer';

function DashboardLayout({ children }) {
  const params = useParams();
  return (
    <>
      <DashboardHeader />
      <main className="text-white">{children}</main>
      <Footer />
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
