import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import SearchContainer from '../search/search_container';
class Navbar extends React.Component {
  constructor(props){
    super(props);

    this.logged_in_left = this.logged_in_left.bind(this);
    this.logged_in_right = this.logged_in_right.bind(this);

  }

  logged_in_left() {
    return (
      <div className="navbar-left">
        <a href="/#/tracks" className="header-logo">
          <div className="cloud-logo-li"></div>
        </a>
        <a href="/#/tracks" className="header-item">Home</a>
        <a href={`/#/users/${this.props.currentUser.id}`} className="header-item">Collection</a>
      </div>
    );
  }

  logged_in_right() {
    return (
      <div className="navbar-right">
        <Link to='/tracks/new' className="header-item">Upload</Link>
        <Link to='/home' className="header-item" onClick={this.props.logout}>Logout</Link>
      </div>
    );
  }


  render(){
    
      // carosel = 'header-carousel-off';

    return <div id="header-carousel-off">
        <div className="backbar">
          <div className="navbar">
            {this.logged_in_left()}
            <SearchContainer />
            {this.logged_in_right()}
          </div>
        </div>
      </div>;
  }
}

export default Navbar;
