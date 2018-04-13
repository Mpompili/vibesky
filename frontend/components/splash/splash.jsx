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
    );
  }

  splash_right() {
    return (
      <nav className="splash-right">
        <Link to="/home/login" className="signin-button sbutton">Sign in</Link>
        <Link to="/home/signup" className="signup-button sbutton">Create Account</Link>
      </nav>
    );
  }


  render(){

    let splashleft = this.splash_left();
    let splashright = this.splash_right();

    // rename navbar to splash bar
    return (
      <div id='splashpage'>
        <div id='header-carousel'>
          <div className="splashbar">
            {splashleft}
            {splashright}
          </div>
        </div>
        <div id='splashbottom'>
        <h1 className='splash-title' >Discover more with VIBESKY</h1> 
        <h2 className='splash-subtitle' >VIBESKY lets you listen offline,
         ad-free, with over 150 million tracks  -  in the future.</h2> 
         <h3 className='bl-header' >Hear what's trending for free in the VIBESKY community</h3> 
        <ul className='badgeListUl'>
         <a className='badge-a-tags' href="/#/home/signup">
         <li className='badge'>
            <div className='badgeImage'>
              <img src='https://i1.sndcdn.com/artworks-ld62lgFrGfH0-0-t200x200.jpg'/>
            </div>
            <div className='badgeInfo'>
              <p className='badgeDet bdsn'>Plug Walk</p> 
              <p className='badgeDet bda'>Rich The Kid</p> 
            </div> 
          </li>
          </a>
           <a className='badge-a-tags' href="/#/home/signup">
         <li className='badge'>
            <div className='badgeImage'>
              <img src='https://i1.sndcdn.com/artworks-000317416521-p8gs6g-t200x200.jpg'/>
            </div>
            <div className='badgeInfo'>
              <p className='badgeDet bdsn'>Japan</p> 
              <p className='badgeDet bda'>Famous Dex</p> 
            </div> 
          </li>
          </a>
           <a className='badge-a-tags' href="/#/home/signup">
         <li className='badge'>
            <div className='badgeImage'>
              <img src='https://i1.sndcdn.com/artworks-000299383161-9k6qfd-t200x200.jpg'/>
            </div>
            <div className='badgeInfo'>
              <p className='badgeDet bdsn'>BlocBoy JB "LOOK ALIVE"</p> 
              <p className='badgeDet bda'>octobersveryown</p> 
            </div> 
          </li>
          </a>
           <a className='badge-a-tags' href="/#/home/signup">
         <li className='badge'>
            <div className='badgeImage'>
              <img src='https://i1.sndcdn.com/artworks-000328841943-et5xv7-t200x200.jpg'/>
            </div>
            <div className='badgeInfo'>
              <p className='badgeDet bdsn'>Diamond Teeth Samurai</p> 
              <p className='badgeDet bda'>YoungBoy Never Broke Again</p> 
            </div> 
          </li>
          </a>
           <a className='badge-a-tags' href="/#/home/signup">
         <li className='badge'>
            <div className='badgeImage'>
              <img src='https://i1.sndcdn.com/artworks-000330812538-j8xfj8-t200x200.jpg'/>
            </div>
            <div className='badgeInfo'>
              <p className='badgeDet bdsn'>Bounce Out With That</p> 
              <p className='badgeDet bda'>YBN Nahmir</p> 
            </div> 
          </li>
          </a>
           <a className='badge-a-tags' href="/#/home/signup">
         <li className='badge'>
            <div className='badgeImage'>
            <img src="https://i1.sndcdn.com/artworks-000306529515-38iu6a-t200x200.jpg"/>
            </div>
            <div className='badgeInfo'>
              <p className='badgeDet bdsn'>Billy</p> 
              <p className='badgeDet bda'>6IX4OUR</p> 
            </div> 
          </li>
          </a>
           <a className='badge-a-tags' href="/#/home/signup">
         <li className='badge'>
            <div className='badgeImage'>
            <img src='https://i1.sndcdn.com/artworks-000299447418-6z909k-t200x200.jpg'/>
            </div>
            <div className='badgeInfo'>
              <p className='badgeDet bdsn'>Dari Ya Alby</p> 
              <p className='badgeDet bda'>Hamza Namira</p> 
            </div> 
          </li>
          </a>
           <a className='badge-a-tags' href="/#/home/signup">
         <li className='badge'>
            <div className='badgeImage'>
            <img src='https://i1.sndcdn.com/artworks-000273898682-794yhb-t200x200.jpg'/>
            </div>
            <div className='badgeInfo'>
              <p className='badgeDet bdsn'>ALL GIRLS ARE INCREDIBLE</p> 
              <p className='badgeDet bda'>Juice WRLD</p> 
            </div> 
          </li>
          </a>
           <a className='badge-a-tags' href="/#/home/signup">
         <li className='badge'>
            <div className='badgeImage'>
              <img src="https://i1.sndcdn.com/artworks-Gp90YQmWXXFN-0-t200x200.jpg"/>
            </div>
            <div className='badgeInfo'>
              <p className='badgeDet bdsn'>XXXTENTACION - Embrace Love</p> 
              <p className='badgeDet bda'>XXXTENTACION</p> 
            </div> 
          </li>
          </a>
           <a className='badge-a-tags' href="/#/home/signup">
         <li className='badge'>
            <div className='badgeImage'>
            <img src='https://i1.sndcdn.com/artworks-pxDqb0aqXRGv-0-t200x200.jpg'/>
            </div>
            <div className='badgeInfo'>
              <p className='badgeDet bdsn'>Freaky Friday</p> 
              <p className='badgeDet bda'>Lil Security</p> 
            </div> 
          </li>
          </a>
           <a className='badge-a-tags' href="/#/home/signup">
         <li className='badge'>
            <div className='badgeImage'>
              <img src='https://i1.sndcdn.com/artworks-000330032865-vxxywe-t200x200.jpg'/>
            </div>
            <div className='badgeInfo'>
              <p className='badgeDet bdsn'>Through the Storm</p> 
              <p className='badgeDet bda'>YoungBoy Never Broke Again</p> 
            </div> 
          </li>
          </a>
           <a className='badge-a-tags' href="/#/home/signup">
         <li className='badge'>
            <div className='badgeImage'>
            <img src='https://i1.sndcdn.com/artworks-000319271595-hhwrkq-t200x200.jpg'/>
            </div>
            <div className='badgeInfo'>
              <p className='badgeDet bdsn'>Creeping</p> 
              <p className='badgeDet bda'>lil Skies</p> 
            </div> 
          </li>
          </a>
        </ul> 
        </div> 
      </div> 
    );
  }
}

export default Splash;
