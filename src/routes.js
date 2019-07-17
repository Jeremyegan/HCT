import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import User from './Components/User/User';


export default (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/user" component={User} />
        <Route path="/inventory" component={Inventory} />
  </Switch>
)