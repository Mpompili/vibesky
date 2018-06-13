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
      barWidth: 3,
      cursorWidth: 0,
      height: this.props.height,
      waveColor: this.props.color,
      responsive: true, 
      normalize: true,
      backend: 'MediaElement' 
    });

    //will set audio peaks if not stored yet. 
    if (this.props.track.audioPeaks.length !== 0) {
      let peaks = JSON.parse(this.props.track.audioPeaks);
      this.wavesurfer.load(this.props.track.audioUrl, peaks);  
    }else {
      this.wavesurfer.load(this.props.track.audioUrl);
    }

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
    
    if (this.props.track.audioPeaks.length === 0){
      this.wavesurfer.on('waveform-ready', () => { 
        let string = JSON.stringify(this.wavesurfer.backend.getPeaks(40));
        const formData = new FormData();
        formData.append("track[audioPeaks]", string); 
        this.props.updateTrack(formData, this.props.track.id); 
      });
    }
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