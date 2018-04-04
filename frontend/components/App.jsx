import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import { Route } from 'react-router-dom';
import SessionContainer from './session/session_container';

const App = () => (
  <div>
    <h1>vibesky</h1>
    <NavbarContainer />
    <Route exact path='/login' component={SessionContainer} />
    <Route exact path='/signup' component={SessionContainer} />

  </div>
);

export default App;
