// Routes.js

import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashboard, Topics, Links } from './pages';
//import SignUp from './pages/Signup';

const SignUp = lazy(() => import("./pages/Signup"));

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/topics" element={<Topics />} />
      <Route path="/links" element={<Links />} />
      
      <Route path="/signup" element={<Suspense fallback={<div>Loading...</div>}>
              <SignUp />
            </Suspense>} />
    </Routes>
  );
}

export default AppRoutes;
