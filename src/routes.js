import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import User from './Components/User/User';
import styled from 'styled-components';


const Background = styled.div`
  box-sizing: border-box;
  font-family: "Gill Sans", sans-serif;
  font-weight: 100;
  background-image: radial-gradient(#4a4a4a, #212121);
  background-size: 100% 100%;
  margin: 0;
  background-repeat: no-repeat;
`

export default (
  <Background>
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/user" component={User} />
        <Route path="/inventory" component={Inventory} />
  </Switch>
  </Background>
)