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

  logged_in() {
    return (
      <div className="header-group">
        <h2 className="header-name">Hi, {this.currentUser.email}!</h2>
        <button className="header-button" onClick={this.logout}>Log Out</button>
      </div>
    )
  }

  render(){

    this.currentUser = this.props.currentUser;
    this.logout = this.props.logout;

    debugger
    return (
      <div>
        { this.currentUser ? this.logged_in() : this.sessionLinks() }
      </div>
    )
  }
}

export default Navbar;
