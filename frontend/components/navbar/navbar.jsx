import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props){
    super(props);
  }
  home_right() {
    return (
      <nav className="navbar-right nbr">
        <Link to="/login" className="signin-button sbutton">Sign in</Link>
        <Link to="/signup" className="signup-button sbutton">Create Account</Link>
      </nav>
    )
  }

  home_left() {
    return (
      <div className="navbar-left">
        <a href="/" className="logo-header">
          <div className="cloud-logo"></div>
          <div className="logo-text"></div>
        </a>
      </div>
    )
  }

  logged_in_right() {
    return (
      <div className="navbar-right">
        <a className="header-item" onClick={this.logout}>Logout</a>
      </div>
    )
  }

  logged_in_left() {
    return (
      <div className="navbar-left">
        <a href="/" className="header-logo">
          <div className="cloud-logo-li"></div>
        </a>
        <a href="/" className="header-item">Home</a>
        <a href="/" className="header-item">Collection</a>
      </div>
    )
  }



  render(){

    this.currentUser = this.props.currentUser;
    this.logout = this.props.logout;

    let navright, navleft, carosel;

    if (this.currentUser){
      navleft = this.logged_in_left();
      navright = this.logged_in_right();
      carosel = 'header-carousel-off';
    } else {
      navleft = this.home_left();
      navright = this.home_right();
      carosel = 'header-carousel';
    }

    return (
      <div id={carosel}>
        <div className="navbar">
          {navleft}
          {navright}
        </div>
      </div>
    )
  }
}

export default Navbar;
