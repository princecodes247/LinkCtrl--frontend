import React from 'react';
// import { Link } from 'react-router-dom';
import { AuthLayout } from '../../components/layouts';
// import React, { useState } from 'react';
import Button from '../../components/ui/Button';

function Register() {
  return (
    <AuthLayout>
      <h1 className="text-5xl mb-12">Login</h1>
      <form className="flex flex-col gap-3 p-8 bg-gray-900 bg-opacity-70 rounded w-2/6 text-gray-200">
        <div className="form-group flex flex-col">
          <label htmlFor="email" className="w-full">
            <p className="text-sm text-gray-300">Email address</p>
            <input
              type="email"
              className="form-control p-3 rounded flex-1 w-full bg-opacity-50 bg-gray-800"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </label>
          <small
            id="emailHelp"
            className="form-text text-xs text-gray-700 text-muted"
          >
            We&apos;ll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group flex flex-col">
          <label htmlFor="password">
            <p className="text-sm text-gray-300">Password</p>
            <input
              type="password"
              className="form-control w-full p-3 rounded flex-1 bg-opacity-50 bg-gray-800"
              id="password"
              placeholder="Password"
            />
          </label>
        </div>
        <div className="form-group">
          <Button to="dashboard" classNames="block mt-4">
            Login
          </Button>
          <div className="w-full my-4 h-1 bg-red-500" />
          <Button to="dashboard" classNames="block">
            Login
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
}

export default Register;
