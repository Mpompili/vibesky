import React from 'react';
import ReactDOM from 'react-dom';

import * as APIutil from './util/session_api_util';

document.addEventListener("DOMContentLoaded", ()=>{
  const root = document.getElementById('root');
  window.login = APIutil.login;
  window.logout = APIutil.logout; 
  ReactDOM.render(<h1>Welcome to vibesky</h1>, root);
});
