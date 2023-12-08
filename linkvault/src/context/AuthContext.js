// @ts-nocheck
import React, { useContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}
function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unSubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  /**
   * @param {string} email
   * @param {string} password
   * @param {string} username
   */
  async function signup(email, password, username) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // update username
        updateProfile(user, {
          displayName: username,
          photoURL:
            "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        })
          .then(() => {
            // Profile updated!
            const updatedUser = auth.currentUser;
            // @ts-ignore
            setCurrentUser(updatedUser);
            return updatedUser;
          })
          .catch((error) => {
            // An error occurred
            // ...
            console.log("error updating profile " + error);
            return null;
          });
      })
      .catch((error) => {
        console.log("error Signing up " + error);
        return null;
      });
  }

  function login(email, password) {
    return new Promise((resolve, reject) => {
      const auth = getAuth();
      
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          resolve(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          reject(errorMessage);
        });
    });
  }
  

  function logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        // Handle logout error
        console.error("Error during logout:", error);
      });
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
