// Routes.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Topics from './pages/Topics';
import Links from './pages/Links';
import SignUp from './pages/Signup';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/topics" element={<Topics />} />
      <Route path="/links" element={<Links />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default AppRoutes;
