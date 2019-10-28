import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import VoterRegistration from './VoterRegistration';
import VoterDashboard from './VoterDashboard';

import '../styles/App.css';

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
        </Switch>
      }
    </Router>
  );
}

export default App;
