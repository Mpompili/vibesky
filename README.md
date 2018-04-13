# vibesky

#### https://vibesky.herokuapp.com

vibesky, a SoundCloud clone, is a music social media app where users can discover and upload music using a Ruby on Rails backend, Postgresql database, AWS S3 database, and React/Redux front-end architecture. 

![VibeSky HomePage](https://github.com/Mpompili/VSImages/blob/master/screencapture-localhost-3000-2018-04-13-15_20_15.png?raw=true)

![VIBESKY tracks page](https://github.com/Mpompili/VSImages/blob/master/screencapture-localhost-3000-2018-04-13-15_23_05%20(1).jpg?raw=true)

## Planning & Design


![DesignSketchup](https://github.com/Mpompili/VSImages/blob/master/PREADMEimage.jpg?raw=true)

[View Design Docs in the wiki!](https://github.com/Mpompili/vibesky/wiki)

## Technologies 

### Backend 
+ Ruby On Rails
+ jBuilder 
+ PostgreSQL 
+ Heroku 
+ Paperclip 

### Frontend
+ React/Redux
+ JavaScript
+ npm 
+ Webpack 

### Storage 
+ AWS S3

## Features & Implementation

**Tracks:** A user can upload tracks, edit the track details details, add images to represent the track.

**TrackPlayer:** Users can listen to posted tracks with persistence (without interuption while navigating the site) as well as pause, play, and view the track page using the interactive trackplayer.

**Comments:** Users can comment on any given track and delete any comments that they have made.

**Likes:** Users can like any track on the site through the show page, index list, or trackplayer. 

### Secure Authentication 
+ BCrypt for password generation. Secures authentication system with password-salting and hashing. 
+ Guest / Demo Account 

### Modals 

Modals were used to implement the Login/Signup session forms.

```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import SplashContainer from '../splash/splash_container';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};



class sessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      modalIsOpen: true,
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }
  
    componentWillMount(){
    Modal.setAppElement(document.getElementById('root'));
  }

  openModal() {
     this.setState({modalIsOpen: true});
   }

   afterOpenModal() {
     // references are now sync'd and can be accessed.
   }

   closeModal() {
     this.setState({modalIsOpen: false});
     this.props.clearErrors();
     this.props.history.push("/home");
   }
   
    <div>
      <Modal
        isOpen={this.state.modalIsOpen}
       onAfterOpen={this.afterOpenModal}
       onRequestClose={this.closeModal}
       style={customStyles}
       contentLabel="Example Modal"
        >
        <form onSubmit={this.handleSubmit} className="session-form-box">
            {message}
            <p id="session-error-message">{styledErrors}</p>
            <input
              type="text"
              value={this.state.email}
              placeholder="Your email address"
              onChange={this.update('email')}
              className={inputStyle}
              />
          <br/>
          <input
            type="password"
            value={this.state.password}
            placeholder="Your Password"
            onChange={this.update('password')}
            className={inputStyle}
            />
        </form>
      </Modal>
    </div>

```

### Waveforms 

Wavesurfer.js was used to create an audio-waveform to visually represent the progress of a track. 

```jsx
import React from 'react';
import WaveSurfer from 'wavesurfer.js';

class WaveForm extends React.Component{
  constructor(props){
    super(props);
  
  }
  
  componentDidMount() {
    this.wavesurfer = WaveSurfer.create({
      container: `#track-${this.props.track.id}-waveform`,
      progressColor: '#f50',
      barHeight: 3,
      barWidth: 2,
      cursorWidth: 0,
      height: this.props.height,
      waveColor: this.props.color,
      interact: false 
    });

    this.wavesurfer.load(this.props.track.audioUrl);
    this.wavesurfer.setMute(true);
  }
  
  render() {
    return (
      <div>
        <div id={`track-${this.props.track.id}-waveform`}></div>
      </div>
    );
  }

}
```

### React Player

React Player was used in-tandem with Waveform to play any music uploaded to VIBESKY. 

```jsx
import React from 'react';
import ReactPlayer from 'react-player';

class TrackPlayer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        volume: 0.8,
        muted: false,
        played: 0,
        playedSeconds: 0,
        loaded: 0,
        duration: 0,
        playbackRate: 1.0,
        loop: false,
    };
    this.reactplayer = React.createRef(); 

  }
  
  ......
  
   <ReactPlayer
             ref={this.reactplayer}
             width='0%'
             height='0%'
             url={trackToPlay}
             playing={playing}
             loop={loop}
             volume={volume}
             muted={muted}

             progressInterval={500}
             onProgress={this.onProgress()}
             onDuration={this.onDuration()}
           />
      </div>
    );
  }

}
```

### Comments and Likes 

Users can comment and like a track from the main page or a track's showpage. 

## In-Progress
- [ ] Additional Trackplayer functionality: queue a playlist of songs, seek a track. 
- [ ] Refactorization 
- [ ] Waveform optimization 
- [ ] Developing upon SoundCloud styling 

## Future Directions
+ Queue within Trackplayer 
+ User profiles: with profile pictures and list of all user's uploaded tracks
+ Search by user or track