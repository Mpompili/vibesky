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
        loop: false
    };
  }

  onDuration(){
    return ((duration) => {
      this.setState({ duration });
    });
  }

  onProgress(){
    return ((state) => {
      if (!this.state.seeking) { this.setState(state);}
    })
  }

  playPause(e) {
    e.preventDefault();
    let { currentTrack, playing} = this.props;
    if (currentTrack !== null) {
        this.props.setPlayPause(!playing);
      }
  }


  secondsToTime(seconds){
    let duration = new Date(null);
    duration.setSeconds(seconds);
    let response = duration.toISOString().substr(14,5);
    return response;
  }

  testFunction(){

    if (this.props.currentTrack == null){
      return {
        trackToPlay: '',
        trackImage: 'https://image.flaticon.com/icons/svg/3/3722.svg',
        trackUploader: '',
        trackName: ''
    }} else {
      return {
        trackToPlay: this.props.currentTrack.audioUrl,
        trackImage: this.props.currentTrack.imageUrl,
        trackUploader: this.props.currentTrack.uploader,
        trackName: this.props.currentTrack.title
      }
    };
  }

  render() {
    let { currentTrack, playing } = this.props;
    let { loop, volume, muted } = this.state;
    let { trackToPlay, trackImage, trackUploader, trackName} = this.testFunction();

    let durationTime = this.secondsToTime(this.state.duration);
    let playedTime = this.secondsToTime(this.state.playedSeconds);
    let percentage = `${Math.ceil(this.state.played * 100)}%`;
    let loopActive = loop ? 'loop-btn-active' : 'loop-btn';

    return (
      <div id='track-player-bar'>
        <div id='track-player-container'>
          <div id='tp-controller'>
            <div id='previous-btn' className='controller-btn'></div>
            <div id='play-pause-btn' className='controller-btn' onClick={(e) => this.playPause(e) }></div>
            <div id='next-btn' className='controller-btn' onClick={() => console.log(this.state)}></div>
            <div id='shuffle-btn' className='controller-btn'></div>
            <div id={loopActive} className='controller-btn' onClick={() => this.setState({loop: !loop}) }></div>
          </div>
          <div id='tp-progress'>
            <div id='tp-timepassed'>{playedTime}</div>
            <div id='tp-scrubbar'>
              <div id='scrub-bg'></div>
              <div id='scrub-progress' style={{width: percentage}}></div>
              <div id='scrup-handle'></div>
            </div>
            <div id='tp-duration'>{durationTime}</div>
          </div>
          <div className='tp-track-dets'>
            <div id='mute-volume-btn' className='controller-btn'></div>
            <div className='tp-td-uploader-pic'>
              <img src={trackImage}/>
            </div>
            <div className='tp-td-track-info'>
              <p>{trackUploader}</p>
              <p>{trackName}</p>
            </div>
            <div id='liked-button' className='controller-btn'></div>
            <div id='playlist-button' className='controller-btn'></div>

          </div>
        </div>
        <ReactPlayer
             ref={node => this.reactplayer = node}
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
             progressInterval={500}
             onProgress={this.onProgress()}
             onDuration={this.onDuration()}
           />
      </div>
    )
  }

}

export default TrackPlayer;
