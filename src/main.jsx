import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';

// Auth Pages
import Register from './pages/auth/register';
import Login from './pages/auth/login';

// User Pages
import Dashboard from './pages/users/dashboard';
import Project from './pages/users/project';
import Settings from './pages/users/settings';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <body className="bg-black">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Auth Routes */}
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />

          {/* User Routes */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="project" element={<Project />} />
          <Route path="project/:projectID" element={<Project />} />
          <Route path="settings" element={<Settings />} />
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
        </Routes>
      </BrowserRouter>
    </body>
  </React.StrictMode>
);
