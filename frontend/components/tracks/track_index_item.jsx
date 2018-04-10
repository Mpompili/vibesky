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
    let { currentTrack, playing, trackId } = this.props.trackplayer;
    if (currentTrack === null) {
      this.props.setCurrentTrack(track);
    }
    if (currentTrack !== null && trackId == track.id) {
        this.props.setPlayPause(!playing);
      } else {
        this.props.setCurrentTrack(track);
      }
  }

  deleteSong(trackId, e){
    e.preventDefault();
    this.props.deleteTrack(trackId);
  }

  componentDidMount() {
  }

  render(){
    let { track, trackplayer } = this.props;

    let buttonPlaying = (trackplayer.playing && trackplayer.trackId === track.id) ?
      'ti-play playing' : 'ti-play';

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
              <div className={buttonPlaying} onClick={(e) => this.songButton(track, e)}>

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
            <Link to={`/tracks/${track.id}/edit`}className="header-item">Upload</Link>
            <button onClick={(e) => this.deleteSong(track.id, e)}>destroy song</button>
            <div className='button-bar'>buttonbar</div>
          </section>

        </div>

      </div>
    )
  }
}

export default TrackItem;
