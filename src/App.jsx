import logo from './logo.svg';
import {React , Suspense }  from 'react';
import './App.scss';
import AppRouter from './AppRouter';
// import Login from './components/login/Login';
// import Dashboard from './components/dashboard/Dashboard';
// import UserData from './components/userData/UserData';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppRouter />
    </Suspense>
    // <Router>
    //   <Switch>
    //     <Route path="/Login" exact component={Login} />
    //     <Route path="/Dashboard" component={Dashboard} />
    //     <Route path="/UserData" component={UserData} />
    //   </Switch>
    // </Router>
  );
}

export default App;
