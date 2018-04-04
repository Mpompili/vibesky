import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { login, RECEIVE_CURRENT_USER } from './actions/session_actions';
import * as APIUtil from './util/session_api_util';

document.addEventListener("DOMContentLoaded", ()=>{
  const root = document.getElementById('root');
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<h1>Welcome to vibesky</h1>, root);
});
