import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import ReactPlayer from 'react-player';
import FilePlayer from 'react-player/lib/players/FilePlayer';
import WaveFormContainer from '../trackplayer/waveform_container';

//will import track index item
class TrackItem extends React.Component {
  constructor(props) {
    super(props);
    this.songButton = this.songButton.bind(this);
  }

  songButton(track, e) {
    e.preventDefault();
    let { currentTrack, playing } = this.props.trackplayer;
    if (currentTrack === null) { this.props.setCurrentTrack(track) };
    if (currentTrack !== null) {
      if (currentTrack.id == track.id){
        this.props.setPlayPause(!playing);
      } else {
        this.props.setCurrentTrack(track);
      }
    }
  }

  componentDidMount() {
    // let wavesurfer = WaveSurfer.create({
    //   container: '#waveform',
    //   waveColor: 'violet',
    //   progressColor: 'purple',
    //   height: 100
    // });
    // wavesurfer.load(this.props.track.audioUrl);
  }

  render(){
    let { track } = this.props;

    // let waveformdiv;
    // if (track.id == 10) {
    //   console.log('yes it is 10');
    //   waveformdiv = (<div id='waveform'><div></div></div>);
    //
    // } else {
    //   waveformdiv = (<div></div>);
    // }
    return (
      <div className='track-item-container'>

        <div className='track-uploader-info'>
          <aside className="track-uploader-circle">
            <img src={track.imageUrl}/>
          </aside>
          <aside className="track-uploader-name">{track.uploader}</aside>
        </div>

        <div className='track-item'>
          <div className='track-image-box'>
            <img src={track.imageUrl}/>
          </div>

          <section className='track-details'>
            <div className='td-top'>
              <div className="ti-play">
                <button onClick={(e) => this.songButton(track, e)}></button>
              </div>
              <div className="ti-upload-det">
                <aside className="ti-description">{track.uploader}</aside>
                <aside className="ti-title">{track.title}</aside>
              </div>
            </div>
            <div className='sound-bar'>
              <span></span>
              <WaveFormContainer track={track}/>
            </div>
            <div className='button-bar'>buttonbar</div>
          </section>

        </div>

      </div>
    )
  }
}

export default TrackItem;


  //   if (this.props.trackplayer.currentTrack === track){
  //     console.log('is the same song');
  //     this.props.setPlayPause(!this.props.trackplayer.playing);
  //   } else {
  //     console.log('not the same song');
  //
  //     this.props.setCurrentTrack(track);
  //   }
  // }
