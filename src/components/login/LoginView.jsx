// LoginPage.jsx
import React from 'react';
import './Login.scss';
import { NavLink } from 'react-router-dom';

const Login = ({ handleLogin, handleForgotPassword, setPassword, setEmail, password, email }) => {


  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />

        <NavLink to="/dashboard">
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </NavLink>


        <p className="forgot-password" onClick={handleForgotPassword}>
          Forgot Password?
        </p>
      </form>
    </div>
  );
};

export default Login;
