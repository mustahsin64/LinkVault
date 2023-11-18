/* eslint-disable no-unused-vars */
import React from "react";
import AppRoutes from "./AppRoutes";
import AuthProvider from "./context/AuthContext";
import firebase from './firebase';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <AppRoutes />
      </div>
    </AuthProvider>
  );
}

export default App;
