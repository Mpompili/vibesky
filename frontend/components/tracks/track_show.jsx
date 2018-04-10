import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import WaveFormContainer from '../trackplayer/waveform_container';

class TrackShow extends React.Component {
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
    this.props.fetchTrack(this.props.match.params.id);
  }

  userTrackButtons() {
    let track = this.props.track;
    if (this.props.currentUser.id == track.uploaderId){
      return (
        <div className='button-bar'>
          <div className='controller-btn like-btn'>like</div>
          <Link to={`/tracks/${track.id}/edit`} className="controller-btn edit-btn">Edit</Link>
          <div className='controller-btn delete-btn' onClick={(e) => this.props.deleteSong(track.id, e)}>Delete</div>
        </div>
      )}else{
        return (
          <div className='button-bar'>
            <div className='controller-btn like-btn'>like</div>
          </div>
        )};
  }

  render(){
    let { track, trackplayer } = this.props;

    let buttonPlaying = (trackplayer.playing && trackplayer.trackId === track.id) ?
      'ts-play playing' : 'ts-play';
    let buttonBar = this.userTrackButtons();

    return (
      <div className='track-show-page'>
        <div className='track-show-container'>
          <div className='track-show-detail'>
            <div className='track-sd-top'>
              <div className={buttonPlaying} onClick={(e) => this.songButton(track, e)}></div>
              <div className='track-sd-info'>
                <div className='track-sd-uploader'>{track.uploader}</div>
                <div className='track-sd-title'>{track.title}</div>
              </div>
            </div>
            <div className='track-sd-bott'>
              <WaveFormContainer track={track} height={100} color={'#fff'}/>
            </div>
          </div>
          <div className='track-show-image-container'>
            <img src={track.imageUrl}/>
          </div>
        </div>
        <div className='track-show-container-bottom'>
          <div className='track-show-comment-bar'>
            <div className='comment-container'>
              <div className='comment-form'>
                <div className='comment-form-user'>
                  <img src={track.imageUrl}/>
                </div>
                <div className='comment-input-container'>
                  <input className='comment-input' type='text' placeholder='Write a Comment'/>
                </div>
              </div>
              <div className='comment-buttons'></div>
            </div>
          </div>
          <div className='tscb-sidebar'>
          </div>
        </div>
      </div>
    )
  }
}

export default TrackShow;
