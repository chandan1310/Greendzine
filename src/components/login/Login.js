
import React, { useState } from 'react';
import './Login.scss';
import { NavLink } from 'react-router-dom';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email.trim() !== '' && password.trim() !== '') {
    }
  };

  const handleForgotPassword = () => {
    alert('Forgot Password ?');

  };
  const isLoginButtonDisabled = !email || !password;
  const filledStyle = { borderColor: 'green' };
  const unfilledStyle = { borderColor: '' };

  return (

    <div className="login-container">
      <div alt="Logo" className="logo" ></div>
      <h3 className="content">#We are Electric</h3>

      <input
        className="login-box"
        type="email"
        placeholder="Email ID"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={email ? filledStyle : unfilledStyle}
      />
      <input
        className="login-box"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={password ? filledStyle : unfilledStyle}
      />
      <NavLink to="/dashboard">
        <button
          type="button"
          onClick={handleLogin}
          disabled={isLoginButtonDisabled}
        >
          Login
        </button>
      </NavLink>
      <p className="forgot-password" onClick={handleForgotPassword}>
        Forgot Password?
      </p>

    </div>
  );
};

export default Login;
