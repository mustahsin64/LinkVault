// Routes.js

import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard, Topics, Links } from "./pages";
//import SignUp from './pages/Signup';

const SignUp = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/topics" element={<Topics />} />
      <Route path="/links" element={<Links />} />

      <Route
        path="/signup"
        element={
          <Suspense fallback={<div>...</div>}>
            <SignUp />
          </Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <Suspense fallback={<div>...</div>}>
            <Login />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
