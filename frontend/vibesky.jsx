import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { login, logout, RECEIVE_CURRENT_USER } from './actions/session_actions';
import * as APIUtil from './util/session_api_util';
import Root from './components/root';
document.addEventListener("DOMContentLoaded", ()=>{
  const root = document.getElementById('root');
  const store = configureStore();
  ////////////////TEST//////////////////
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.logout = logout;
  ////////////////TEST//////////////////
  ReactDOM.render(<Root store={store} />, root);
});
