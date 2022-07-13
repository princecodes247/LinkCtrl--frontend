import React from 'react';
import { Link } from 'react-router-dom';
// import React, { useState } from 'react';

function Login() {
  return (
    <footer className="flex justify-center p-4">
      <Link to="/">Expenses</Link>
      <div className="App-header">LinkCtrl footer</div>
    </footer>
  );
}

export default Login;
