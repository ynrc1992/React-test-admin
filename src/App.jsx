import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Admin from './pages/admin';
import Login from './pages/login';

export default function App() {
  return <div>
    <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Admin}/>
    </Switch>
  </div>;
}


