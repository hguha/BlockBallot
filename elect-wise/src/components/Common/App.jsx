import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AdminLogin from '../Admin/AdminLogin';
import AdminDashboard from '../Admin/AdminDashboard';
import VoterRegistration from '../Voter/VoterRegistration';
import VoterDashboard from '../Voter/VoterDashboard';
// import Login from './Login';

import '../../styles/App.css';

function App() {
  return (
    <Router>
      {
        <Switch>
          <Route path="/admin/dashboard">
            <AdminDashboard username="Sample Username" organization="Sample Organization" />
          </Route>
          <Route path="/admin">
            <AdminLogin />
          </Route>
          <Route path="/voter/dashboard">
            <VoterDashboard />
          </Route>
          <Route path="/">
            <VoterRegistration />
          </Route>
          {/* <Route path="/voter">
            <VoterRegistration />
          </Route>
          <Route path="/">
            <Login />
          </Route> */}
        </Switch>
      }
    </Router>
  );
}

export default App;
