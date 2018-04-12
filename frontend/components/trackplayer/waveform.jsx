import React from 'react';
import WaveSurfer from 'wavesurfer.js';

class WaveForm extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.currentTrack == null) {
    } else {

      // currentTrack: state.trackplayer.currentTrack,
      // playing: state.trackplayer.playing,
      // trackId: state.trackplayer.trackId
      // track: is passed in 


      let checkTrack = newProps.trackId == this.props.track.id;
      let sameTrack = newProps.trackId == this.props.trackId;
      if (checkTrack && !sameTrack) this.wavesurfer.play();
      if (!checkTrack) this.wavesurfer.stop();
      if (checkTrack && sameTrack && newProps.playing !== this.props.playing) this.wavesurfer.playPause();
      this.wavesurfer.setMute(true);

      // if newProps.playing 

      //when the song ends, the waveform resets and currentTrack is set to null.
      this.wavesurfer.on('finish', () => {
        this.wavesurfer.stop();
        this.props.endCurrentTrack();
      });

     
      this.wavesurfer.on('seek', (seek) => {
        console.log(seek);
        
        // this.props.seekTrack(seek);
      });
    }
  }

  componentDidMount() {
    this.wavesurfer = WaveSurfer.create({
      container: `#track-${this.props.track.id}-waveform`,
      progressColor: '#f50',
      barHeight: 3,
      barWidth: 2,
      cursorWidth: 0,
      height: this.props.height,
      waveColor: this.props.color
    });
    this.wavesurfer.load(this.props.track.audioUrl);

  }

  render() {
    return (
      <div>
        <div id={`track-${this.props.track.id}-waveform`}></div>
      </div>
    )
  }

}

export default WaveForm;
