import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import { Route, HashRouter, Switch } from 'react-router-dom';
import SessionContainer from './session/session_container';
import SplashContainer from './splash/splash_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Provider } from 'react-redux';
import TrackIndexContainer from './tracks/track_index_container';
import TrackFormContainer from './tracks/track_form_container';
import ReactPlayer from 'react-player';
import TrackPlayerContainer from './trackplayer/trackplayer_container';

const App = () => (
  <div id='app'>
    <AuthRoute path ='/' component={SplashContainer}/>
    <ProtectedRoute path ='/' component={NavbarContainer} />
    <div className="content-container">
      <Switch>
        <ProtectedRoute exact path ='/tracks/new' component={TrackFormContainer} />
        <ProtectedRoute exact path ='/tracks' component={TrackIndexContainer} />
      </Switch>
    </div>

    <Switch>
      <AuthRoute exact path='/login' component={SessionContainer} />
      <AuthRoute exact path='/signup' component={SessionContainer} />
    </Switch>
      <ProtectedRoute path ='/' component={TrackPlayerContainer} />
  </div>
);

export default App;
