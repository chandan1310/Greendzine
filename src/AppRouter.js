// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import UserData from './components/userData/UserData';

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/userdata" element={<UserData />} />
    </Routes>
  );
};

export default AppRouter;
