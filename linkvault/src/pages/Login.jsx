import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // @ts-ignore
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // @ts-ignore
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // @ts-ignore
  const handleLogIn = async (e) => {
    setLoading(true);
    setError("");
    login(email, password)
      .then((user) => {
        // Handle successful login
        console.log("Logged in user:", user);
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        // Handle login error
        console.error("Login error:", error);
        setError(error)
      });
    setLoading(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Login</h1>
          <form onSubmit={handleSubmit}>
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

            <button
              type="submit"
              disabled={loading}
              onClick={handleLogIn}
              className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-700 focus:outline-none my-1"
            >
              Log In
            </button>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>

        <div className="text-grey-dark mt-6">
          Do you want a new account?{" "}
          <Link
            to="/signup"
            className="no-underline border-b border-blue-700 text-blue-700"
          >
            Sign up{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
