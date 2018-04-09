import React from 'react';
import WaveSurfer from 'wavesurfer.js';

class WaveForm extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.currentTrack == null) {
    } else {
      let checkTrack = newProps.trackId == this.props.track.id;
      let sameTrack = newProps.trackId == this.props.trackId;
      if (checkTrack && !sameTrack) this.wavesurfer.play();
      if (!checkTrack) this.wavesurfer.stop();
      if (checkTrack && sameTrack && newProps.playing !== this.props.playing) this.wavesurfer.playPause();
      this.wavesurfer.setMute(true);

      //when the song ends, the waveform resets and currentTrack is set to null. 
      this.wavesurfer.on('finish', () => {
        this.wavesurfer.stop();
        this.props.endCurrentTrack();
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
