import React from 'react';
// import { Link } from 'react-router-dom';
import { AuthLayout } from '../../components/layouts';
// import React, { useState } from 'react';

function Register() {
  return (
    <AuthLayout>
      <form className="flex flex-col">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">
            <p>Email address</p>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </label>
          <small id="emailHelp" className="form-text text-muted">
            We&apos;ll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">
            <p>Email address</p>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </label>
          <small id="emailHelp" className="form-text text-muted">
            We&apos;ll never share your email with anyone else.
          </small>
        </div>
      </form>
    </AuthLayout>
  );
}

export default Register;
