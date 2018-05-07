import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import { Route, HashRouter, Switch } from 'react-router-dom';
import SessionContainer from './session/session_container';
import SplashContainer from './splash/splash_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Provider } from 'react-redux';
import TrackIndexContainer from './tracks/track_index_container';
import TrackFormContainer from './tracks/track_form_container';
import TrackPlayerContainer from './trackplayer/trackplayer_container';
import EditFormContainer from './tracks/edit_track_container';
import TrackShowContainer from './tracks/track_show_container';
import UserShowContainer from './users/user_show_container'; 
import UserEditContainer from './users/user_form_container';

const App = () => (
  <div id='app'>

      <ProtectedRoute path ='/' component={NavbarContainer} />
      <AuthRoute path ='/home' component={SplashContainer}/>

    <div className="content-container">
      <Switch>
        <ProtectedRoute exact path ='/users/:id' component={UserShowContainer} /> 
        <ProtectedRoute exact path ='/users/:id/edit' component={UserEditContainer} /> 
        <ProtectedRoute exact path ='/tracks/new' component={TrackFormContainer} />
        <ProtectedRoute exact path ='/tracks/:id/edit' component={EditFormContainer} />
        <ProtectedRoute exact path ='/tracks/:id' component={TrackShowContainer} />
        <ProtectedRoute exact path ='/tracks' component={TrackIndexContainer} />
        <ProtectedRoute path ='/' component={TrackIndexContainer} />
      </Switch>
    </div>

    <Switch>
      <AuthRoute exact path='/home/login' component={SessionContainer} />
      <AuthRoute exact path='/home/signup' component={SessionContainer} />
    </Switch>
      <ProtectedRoute path ='/' component={TrackPlayerContainer} />
  </div>
);

export default App;
