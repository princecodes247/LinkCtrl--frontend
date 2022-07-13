import React from 'react';
import { AuthLayout } from '../../layouts';
// import React, { useState } from 'react';
import Button from '../../components/Button';

function Login() {
  return (
    <AuthLayout>
      <h1 className="text-5xl">Login</h1>
      <form className="flex flex-col">
        <div className="form-group flex flex-col">
          <label htmlFor="email">
            <p>Email address</p>
            <input
              type="email"
              className="form-control p-2 rounded-sm"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </label>
          <small id="emailHelp" className="form-text text-muted">
            We&apos;ll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group flex flex-col">
          <label htmlFor="password">
            <p>Password</p>
            <input
              type="password"
              className="form-control p-2 rounded-sm"
              id="password"
              placeholder="Password"
            />
          </label>
        </div>
        <div className="form-group">
          <Button to="dashboard">Login</Button>
        </div>
      </form>
    </AuthLayout>
  );
}

export default Login;
