/* eslint-disable react-hooks/exhaustive-deps */
// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const { signup,currentUser } = useAuth();

  const navigate = useNavigate();

  const handleFullNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSignup = async (e) => {
    setLoading(true)
    try{
      await signup(email,password,userName)

      setTimeout(() => {
        setLoading(false);
        navigate("/");
      }, 1500);
    }
    catch{
      
    }
    setLoading(false)
  }

  const handleSubmit = (event) => {
    // Handle form submission logic here
    event.preventDefault();
    // Add your form submission logic here
  };

  useEffect(() =>{
    if(currentUser){
      navigate("/");
    }
  },[currentUser])

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="userName"
              placeholder="Full Name"
              value={userName}
              onChange={handleFullNameChange}
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />

            <button
              type="submit"
              disabled={loading}
              onClick={handleSignup}
              className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-700 focus:outline-none my-1"
            >
              Create Account
            </button>
          </form>

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the{' '}
            <Link className="no-underline border-b border-gray-400 text-blue-500">
            Terms of Service 
            </Link>
            {' '}and{' '}
            <Link className="no-underline border-b border-gray-400 text-blue-500">
            Privacy Policy
            </Link>
          </div>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?{' '}
          <a className="no-underline border-b border-blue-700 text-blue-700" href="../login/">
            Log in
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default SignUp;
