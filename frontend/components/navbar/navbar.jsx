import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(nextProps){
    if (!nextProps.currentUser) {
      this.props.history.replace('/');
    }
  }

  logged_in_left() {
    return (
      <div className="navbar-left">
        <a href="/#/dashboard" className="header-logo">
          <div className="cloud-logo-li"></div>
        </a>
        <a href="/#/dashboard" className="header-item">Home</a>
        <a href="/#/dashboard" className="header-item">Collection</a>
      </div>
    )
  }

  logged_in_right() {
    return (
      <div className="navbar-right">
        <Link to='/' className="header-item" onClick={this.logout}>Logout</Link>
      </div>
    )
  }



  render(){

    this.currentUser = this.props.currentUser;
    this.logout = this.props.logout;

    let navright, navleft, carosel;


      navleft = this.logged_in_left();
      navright = this.logged_in_right();
      carosel = 'header-carousel-off';

    return (
      <div id='header-carousel-off'>
        <div className="backbar">
          <div className="navbar">
            {navleft}
            {navright}
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;
