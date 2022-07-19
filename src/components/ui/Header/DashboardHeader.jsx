// import React, { useState } from 'react';
import React from 'react';
import Button from '../Button';
// import './App.css'

function DashboardHeader() {
  return (
    <header className="top-0 w-full flex justify-between p-12 py-4">
      <nav>
        <div className="App-header">LinkCtrl</div>
        <Button to="login">Login</Button>
      </nav>
      <nav>
        <div className="App-header">LinkCtrl</div>
        <Button to="login">Login</Button>
      </nav>
    </header>
  );
}

export default DashboardHeader;
