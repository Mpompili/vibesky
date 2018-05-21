import React from 'react';
import WaveSurfer from 'wavesurfer.js';

class WaveForm extends React.Component{
  constructor(props){
    super(props);
    this.state = { prevSeek: 0 }; 
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
      responsive: true, 
      normalize: true, 
    });

    this.wavesurfer.load(this.props.track.audioUrl);
    this.wavesurfer.setMute(true);

    let start; 

    start = this.props.prevProg ? this.props.prevProg : 0;


    this.wavesurfer.on('ready', () => {
      this.wavesurfer.seekTo(start);
      this.forceUpdate(); 

      this.wavesurfer.on("seek", progress => { 
        this.props.seekWaveForm(progress);
        if (!this.props.playing) {
          this.props.setPlayPause(!this.props.playing, this.props.track.id, progress);
        }
      });
    });
  }

  componentDidUpdate(prevProps) {
    if (!this.wavesurfer) return; 
    if (this.props.playing !== this.wavesurfer.isPlaying()) {
      this.wavesurfer.playPause(); 
    }
    if (!this.props.playing) return; 
    if (this.props.prevSeek !== prevProps.prevSeek) {
      this.wavesurfer.seekTo(this.props.prevSeek);
    }
  }


  render() {
    return (
      <div>
        <div id={`track-${this.props.track.id}-waveform`}></div>
      </div>
    );
  }

}

export default WaveForm;



  // componentWillReceiveProps(newProps) {
  //   if (newProps.currentTrack == null) {
  //   } else {

  //     // currentTrack: state.trackplayer.currentTrack,
  //     // playing: state.trackplayer.playing,
  //     // trackId: state.trackplayer.trackId
  //     // track: is passed in 


  //     let checkTrack = newProps.trackId == this.props.track.id;
  //     let sameTrack = newProps.trackId == this.props.trackId;
  //     if (checkTrack && !sameTrack) this.wavesurfer.play();
  //     if (!checkTrack) this.wavesurfer.stop();
  //     if (checkTrack && sameTrack && newProps.playing !== this.props.playing) this.wavesurfer.playPause();
      

    
  //     this.wavesurfer.on('finish', () => {
  //       this.wavesurfer.stop();
  //       this.props.endCurrentTrack();
  //     });
  
  //     // if newProps.playing 

  //     //when the song ends, the waveform resets and currentTrack is set to null.
  //   }
  // }