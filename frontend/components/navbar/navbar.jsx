import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props){
    super(props);
  }
  sessionLinks() {
    return (
      <nav className="login-signup">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
    )
  }

  logged_in(currentUser, logout) {
    return (
      <div className="header-group">
        <h2 className="header-name">Hi, {currentUser.username}!</h2>
        <button className="header-button" onClick={logout}>Log Out</button>
      </div>
    )
  }

  render(){
    let { currentUser, logout } = this.props;

    return (
      <div>
        { currentUser ? this.logged_in(currentUser, logout) : this.sessionLinks() }
      </div>
    )
  }
}

export default Navbar;
