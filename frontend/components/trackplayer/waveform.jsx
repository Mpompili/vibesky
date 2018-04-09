import React from 'react';
import WaveSurfer from 'wavesurfer.js';

class WaveForm extends React.Component{
  constructor(props){
    super(props);
  }
  componentWillReceiveProps(newProps) {
    if (newProps.currentTrack == null) {
      console.log('newprops currentTrack ISSS null');
    } else {

      let nullTrack = this.props.currentTrack == null;
      let cTrack;

      if (this.props.currentTrack == null){
        cTrack = -1 } else { cTrack = this.props.currentTrack.id };
      let checkTrack = newProps.currentTrack.id == this.props.track.id;
      let sameTrack = newProps.currentTrack.id == cTrack;

      if (checkTrack && !sameTrack){
        this.wavesurfer.play();
      }

      if (!checkTrack) {
        this.wavesurfer.stop();
      }

      if (checkTrack && sameTrack && newProps.playing !== this.props.playing){
        this.wavesurfer.playPause();
      }
      this.wavesurfer.setMute(true);
    }
  }

  componentDidMount() {
    this.wavesurfer = WaveSurfer.create({
      container: `#track-${this.props.track.id}-waveform`,
      progressColor: '#f50',
      barHeight: 3,
      barWidth: 2,
      cursorWidth: 0,
      height: 60,
      waveColor: '#000'
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
