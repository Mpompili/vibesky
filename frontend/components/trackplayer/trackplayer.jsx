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

    
    this.ref = this.ref.bind(this); 
    // this.reactplayer = React.createRef(); 
    // this.ref = this.ref.bind(this); 
    // this.reactplayer = React.createRef();  


    // this.reactplayer = null; 
    // this.setPlayerRef = element => {
    //   this.reactplayer = element;
    //   console.log('in constructor clalback ref:', this.reactplayer); 
    // };
  }

  // componentWillMount(){
  //   console.log('helllo'); 
 
  // }

  componentDidUpdate(prevProps) {
    if (prevProps.trackId == -1 || this.props.trackId == -1) return;
    // console.log('component did update, trackplayer progressTrackId: ', this.props.trackplayer.progressTrackId); 
    
    if (this.props.trackId !== prevProps.trackId) { //new track is being played, look at waveseek 
      // let progress = this.props.trackplayer.progressTrackId[this.props.trackId];
      console.warn('this is the trackplayer after selecting new track in CDU: ', this.props.trackplayer); 
      let progress = this.props.trackplayer.waveSeek; 
      console.table('props:::', this.props);
      console.warn('current duration', this.state.duration);
      console.warn('current track duration', this.state.duration);
      console.warn('current trackId', this.props.trackId);
      console.log('this is progress from trackplayer.waveSeek: ',progress); 
      progress = progress ? progress : 0; 
      this.setState({startT: progress});
      // this.setState({startT: progress});
      console.log('seekTo where new track does not equal previous track:', this.state.duration * progress); 
      this.props.player.seekTo(progress * this.state.duration);
      // this.props.player.seekTo(this.state.startT);
    } else if (
      (this.props.trackId == prevProps.trackId) && this.props.trackplayer.waveSeek !== prevProps.trackplayer.waveSeek
    ) {
      let tester = this.props.trackplayer.progressTrackId[this.props.trackId] * this.state.duration;
      console.log('mother ufkcing tester', tester); 
      this.props.player.seekTo(tester);
    } else {
      console.warn('pausing same song here are the details'); 
      console.log('duration: ', this.state.duration); 
      console.log('making sure its the same song: ', this.props.trackId); 
    }
  }

  keepProgress() {

    if (this.state.startT !== null) {
      const startTime = this.state.startT; 
      this.setState({ startT: null }); 
      console.warn('seekTo in keep progress:', startTime * this.state.duration);
      // this.player.seekTo(startT); 
      console.log('this');
      this.props.player.seekTo(startTime * this.state.duration); 
    }
  }


  // ref(player) {
  //   this.player = player; 
  //   console.warn('setting player: ', player); 
  //   this.props.setPlayerRef(player); 
  // }

  // componentWillReceiveProps(newProps){
  //   if (newProps.seek !== this.props.seek ){
  //     this.reactplayer.current.seekTo(newProps.seek);
  //   }

  //   // if (this.props.currentUser.liked !== newProps.currentUser.liked){
  //   //   console.log('new like toggle');
  //   //   this.props.fetchTrack(newProps.match.params.id); 
  //   // }
  // }

  onDuration(){
    return ((duration) => {
      this.setState({ duration });
    });
  }

  onProgress(){
    return ((state) => {
      // console.log('hitting on progress');
      if (!this.state.seeking) { this.setState(state);}
    });
  }

  playPause(e) {
    e.preventDefault();
    console.log('this is state:', this.state); 
    let { currentTrack, playing, player, trackId} = this.props;
    // if (trackId !== -1) {
    //     console.log('yo');
    //     let prog = player.getCurrentTime() / player.getDuration(); 
    //     console.warn('in trackplayer let prog = ', prog); 
    //     this.props.setPlayPause(!playing, trackId, prog);
    //   }
    if (trackId !== -1) { // it should be the same song 
      let prog = this.props.trackplayer.progressTrackId[trackId] || 0; 
      this.props.setPlayPause(!playing, trackId, prog); 
    }
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
        linkToTrack: `/#/tracks`
    };} else {
      let liked; 
      
      if (this.props.liked){
        liked = 'liked-button-t';}else{ liked = 'liked-button';}
      return {
        trackToPlay: this.props.currentTrack.audioUrl,
        trackImage: this.props.currentTrack.imageUrl,
        trackUploader: this.props.currentTrack.uploader,
        trackName: this.props.currentTrack.title,
        likeButton: liked,
        linkToTrack: `/#/tracks/${this.props.currentTrack.id}`
      };
    }
  }

  // seekTest(){
  //   console.log('hit seekTest');
  //   this.reactplayer.current.seekTo(0.5);
  //   console.log(this.reactplayer); 
  //   console.log(' ^ is react player'); 
  // }

  toggleLike(trackId, e){
    e.preventDefault();
    this.props.toggleLike(trackId); 
  }

  ref(player) {
    this.player = player; 
    // console.log('IN REF METHODDDDD', player); 
    this.props.setTrackPlayer(player); 
  }

  render() {
    
    // if (!currentTrack) return ""; 
    
    let { currentTrack, playing } = this.props;
    let { loop, volume, muted } = this.state;
    let { trackToPlay, trackImage, trackUploader, trackName, likeButton, linkToTrack } = this.testFunction();

    

    // let playButton = (currentTrack == null || playing ) ? 'play-pause-btn' : 'play-pause-btn-paused'; 
    // let playButton;
    // if (playing){ 
    //   playButton = 'play-pause-btn';}else{
    //     playButton = 'play-pause-btn-paused';
    //   }
    //  if (!currentTrack) playButton = 'play-pause-btn';

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
              <img src={trackImage}/>
            </div>
            <div className='tp-td-track-info'>
            <a href={linkToTrack}><p className='tp-trackuploader'>{trackUploader}</p></a>
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
             onProgress={this.onProgress()}
             onDuration={this.onDuration()}
             onReady={this.keepProgress()}
           />
      </div>
    );
  }

}

export default TrackPlayer;
