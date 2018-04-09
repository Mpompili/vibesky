import React from 'react';
import ReactPlayer from 'react-player';

class TrackPlayer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        volume: 0.8,
        muted: false,
        played: 0,
        loaded: 0,
        duration: 0,
        playbackRate: 1.0,
        loop: false
    };
  }

  onDuration(){
    console.log('duration got called');
    return ((duration) => {
      this.setState({ duration });
    });
  }

  onProgress(){
    console.log('onprogress got called');
    return ((state) => {
      if (!this.state.seeking) {
        this.setState(state);
      }
    })
  }
  //
  // onDuration = (duration) => {
  //   console.log('duration', duration);
  //   this.setState({ duration });
  // }

  // onProgress = (state) => {
  //   console.log('onProgress', state);
  //   if (!this.state.seeking) {
  //     this.setState(state);
  //   }
  // }

  playPause(e) {
    e.preventDefault();
    let { currentTrack, playing} = this.props;
    if (currentTrack !== null) {
        this.props.setPlayPause(!playing);
      }
  }




  trackToPlay() {
    return this.props.currentTrack == null ?
    '' : this.props.currentTrack.audioUrl;
  }

  render() {
    let { currentTrack, playing } = this.props;
    let { loop, volume, muted } = this.state;
    let trackToPlay = this.trackToPlay();
    let reactplayer =  node => this.reactplayer = node;
    console.log(trackToPlay);
    console.log('above is track to play');
    return (
      <div id='track-player-bar'>
        <div id='track-player-container'>
          <div id='tp-controller'>
            <div id='previous-btn' className='controller-btn'></div>
            <div id='play-pause-btn' className='controller-btn' onClick={(e) => this.playPause(e) }></div>
            <div id='next-btn' className='controller-btn' onClick={() => console.log(this.state)}></div>
            <div id='shuffle-btn' className='controller-btn'></div>
            <div id='loop-btn' className='controller-btn'></div>
          </div>
          <div id='tp-progress'>
            <div id='tp-timepassed'></div>
            <div id='tp-scrubbar'>
              <div id='scrub-bg'></div>
              <div id='scrub-progress'></div>
              <div id='scrup-handle'></div>
            </div>
            <div id='tp-duration'></div>
          </div>
          <div className='tp-track-dets'>
            <div className='tp-td-uploader-pic'></div>
            <div className='tp-td-track-info'>
              <p>name</p>
              <p>song title</p>
            </div>
            <div className='tp-td-liked'></div>
          </div>
        </div>
        <ReactPlayer
             ref={reactplayer}
             width='0%'
             height='0%'
             url={trackToPlay}
             playing={playing}
             loop={loop}
             volume={volume}
             muted={muted}
             onReady={() => console.log('onReady')}
             onStart={() => console.log('onStart')}
             onError={e => console.log('onError', e)}
             onProgress={this.onProgress()}
             onDuration={this.onDuration()}
           />
      </div>
    )
  }

}

export default TrackPlayer;
