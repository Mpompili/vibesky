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
        startT: null
    };

    this.keepProgress = this.keepProgress.bind(this); 
    this.onDuration = this.onDuration.bind(this); 
    this.onProgress = this.onProgress.bind(this); 
    this.onEnded = this.onEnded.bind(this); 
    this.ref = this.ref.bind(this); 
  }

  ref(player) {
    this.player = player; 
    this.props.setTrackPlayer(player); 
  }

  componentDidUpdate(prevProps) {
    if (prevProps.trackId == -1 || this.props.trackId == -1) return;
    
    if (this.props.trackId !== prevProps.trackId) { //new track is being played, look at waveseek 
      let progress = this.props.trackplayer.waveSeek; 
      progress = progress ? progress : 0; 
      this.setState({startT: progress});
      this.props.player.seekTo(progress * this.state.duration);
    } else if (
      (this.props.trackId == prevProps.trackId) && this.props.trackplayer.waveSeek !== prevProps.trackplayer.waveSeek
    ) {
      let seek = this.props.trackplayer.progressTrackId[this.props.trackId] * this.state.duration;
      this.props.player.seekTo(seek);
    } 
  }

  keepProgress() {

    if (this.state.startT !== null) {
      const startTime = this.state.startT; 
      this.setState({ startT: null }); 
      this.props.player.seekTo(startTime * this.state.duration); 
    }
  }

  // componentWillReceiveProps(newProps){
  //   if (newProps.seek !== this.props.seek ){
  //     this.reactplayer.current.seekTo(newProps.seek);
  //   }

  //   // if (this.props.currentUser.liked !== newProps.currentUser.liked){
  //   //   this.props.fetchTrack(newProps.match.params.id); 
  //   // }
  // }

  onDuration(){
    return ((duration) => {
      this.setState({ duration });
    });
  }

  onProgress() {
    return ((state) => {
      if (!this.state.seeking) { this.setState(state);}
    });
  }

  playPause(e) {
    e.preventDefault();
    let tplayer = this.props.trackplayer.player; 
    let trackProg = this.props.trackplayer.progressTrackId[this.props.trackId];
    let { currentTrack, playing, player, trackId} = this.props;
    if (trackId !== -1) { // it should be the same song 

      // let prog = this.props.trackplayer.progressTrackId[trackId] || 0;
      
      let prog = trackProg ? trackProg : tplayer.getCurrentTime() / tplayer.getDuration();
      this.props.setPlayPause(!playing, trackId, prog); 
    }
  }

  onEnded() {
    let {trackId} = this.props;
    this.props.endCurrentTrack(trackId); 
  }


  secondsToTime(seconds){
    let duration = new Date(null);
    duration.setSeconds(seconds);
    let response = duration.toISOString().substr(14,5);
    return response;
  }

  testFunction(){

    if (!this.props.currentTrack){
      return {
        trackToPlay: '',
        trackImage: 'https://image.flaticon.com/icons/svg/3/3722.svg',
        trackUploader: '',
        trackName: '',
        likeButton: 'liked-button',
        linkToTrack: `/#/tracks`,
        linkToUploader: '/#/tracks'
    };} else {
      let liked; 
      let cTrack = this.props.currentTrack;
      if (this.props.liked){
        liked = 'liked-button-t';}else{ liked = 'liked-button';}
      return {
        trackToPlay: cTrack.audioUrl,
        trackImage: cTrack.imageUrl,
        trackUploader: cTrack.uploader,
        trackName: cTrack.title,
        likeButton: liked,
        linkToTrack: `/#/tracks/${cTrack.id}`,
        linkToUploader: `/#/users/${cTrack.uploaderId}`
      };
    }
  }

  toggleLike(trackId, e){
    e.preventDefault();
    this.props.toggleLike(trackId); 
  }

 

  render() {
    
    let { currentTrack, playing } = this.props;
    let { loop, volume, muted } = this.state;
    let { trackToPlay, trackImage, trackUploader, trackName, likeButton, linkToTrack, linkToUploader } = this.testFunction();

    let playButton = (playing) ?
    'play-pause-btn-paused' : 'play-pause-btn';

    let muteButton = (this.state.muted) ?
    'mute-volume-btn-muted' : 'mute-volume-btn'; 

    let durationTime = this.secondsToTime(this.state.duration);
    let playedTime = this.secondsToTime(this.state.playedSeconds);
    let percentage = `${Math.ceil(this.state.played * 100)}%`;
    // let loopActive = loop ? 'loop-btn-active' : 'loop-btn';

    return (
      <div id='track-player-bar'>
        <div id='track-player-container'>
          <div id='tp-controller'>
            <div id='previous-btn' className='controller-btn non-active-btn'></div>
            <div id={playButton} className='controller-btn' onClick={(e) => this.playPause(e) }></div>
            <div id='next-btn' className='controller-btn non-active-btn' ></div>
            <div className='shuffle-btn controller-btn non-active-btn'></div>
            <div className='loop-btn controller-btn non-active-btn' onClick={() => this.setState({loop: !loop}) }></div>
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
            <div id={muteButton} className='controller-btn' onClick={() => this.setState({muted: !muted})}></div>
            <div className='tp-td-uploader-pic'>
              <a href={linkToTrack}><img src={trackImage}/></a>
            </div>
            <div className='tp-td-track-info'>
            <a href={linkToUploader}><p className='tp-trackuploader'>{trackUploader}</p></a>
            <a href={linkToTrack}><p className='tp-trackname'>{trackName}</p></a>
            </div>
            <div id={likeButton} className='controller-btn' onClick={(e) => this.toggleLike(currentTrack.id, e)}></div>
            <div id='playlist-button' className='controller-btn'></div>

          </div>
        </div>
        <ReactPlayer
             ref={this.ref}
             width='0%'
             height='0%'
             url={trackToPlay}
             playing={playing}
             loop={loop}
             volume={volume}
             muted={muted}

             progressInterval={50}
             onEnded={() => this.onEnded()}
             onProgress={this.onProgress()}
             onDuration={this.onDuration()}
             onReady={() => this.keepProgress()}
           />
      </div>
    );
  }

}

export default TrackPlayer;
