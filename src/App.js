import React, {Component} from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';


class App extends Component {
  render(){
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={Home} />
          <Route pat="/inventory" component={Inventory} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;