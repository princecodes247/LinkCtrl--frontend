// import React, { useState } from 'react';
import React from 'react';
import Button from '../Button';
// import './App.css'

function MainHeader() {
  return (
    <header className="fixed top-0 w-full flex justify-between p-12">
      <div className="App-header">LinkCtrl</div>
      <Button to="login">Login</Button>
    </header>
  );
}

export default MainHeader;
