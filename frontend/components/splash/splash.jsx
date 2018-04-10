import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(props){
    super(props);
  }

  splash_left() {
    return (
      <div className="splash-left">
        <a href="/" className="splash-logo">
          <div className="splash-cloud"></div>
          <div className="splash-text">VIBESKY</div>
        </a>
      </div>
    )
  }

  splash_right() {
    return (
      <nav className="splash-right">
        <Link to="/home/login" className="signin-button sbutton">Sign in</Link>
        <Link to="/home/signup" className="signup-button sbutton">Create Account</Link>
      </nav>
    )
  }


  render(){

    this.currentUser = this.props.currentUser;
    this.logout = this.props.logout;

    let splashleft = this.splash_left();
    let splashright = this.splash_right();

    // rename navbar to splash bar
    return (
      <div id='header-carousel'>
        <div className="splashbar">
          {splashleft}
          {splashright}
        </div>
      </div>
    )
  }
}

export default Splash;
