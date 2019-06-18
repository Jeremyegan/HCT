import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import routes from './routes';
import Nav from './Components/Nav/Nav';




function App() {
    return (
      <HashRouter>
        <Nav />

       {routes}
      </HashRouter>
    );
}

export default App;