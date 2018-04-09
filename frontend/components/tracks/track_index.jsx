import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import TrackFormContainer from './track_form_container';
import TrackItem from './track_index_item';
import ReactPlayer from 'react-player'

//will import track index item
class TrackIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTracks();
  }

  render(){
    // <li>{tracks[key].title},<br/>{tracks[key].image}</li>
    let { tracks, errors, trackplayer, setCurrentTrack, setPlayPause} = this.props;
    let trackItems = Object.keys(tracks).map(key => (
      <TrackItem
        key={key}
        track={tracks[key]}
        trackplayer={trackplayer}
        setCurrentTrack={setCurrentTrack}
        setPlayPause={setPlayPause}
      />
    ));
    let styledErrors = errors.map(err => <li>{err}</li>);

    let trackToPlay;
    if (trackplayer.currentTrack == null){
      console.log('current track in trackplayer is null');
      trackToPlay = '';}
       else {
         console.log('now it is not null');
         trackToPlay = trackplayer.currentTrack.audioUrl;
         console.log(trackToPlay);
        };

    return (
      <span className='track-index-page-container'>
        <div className='track-index-container'>
          <ul className='track-index-tabs'>
            <li className='ti-tab'><a href='/#/tracks'>Stream</a></li>
            <li className='ti-tab ttmid'><a href='/#/tracks'>Discover</a></li>
          </ul>
          <div className="track-index">
            {trackItems}
          </div>
        </div>
        <div className="sidebar-placeholder">
          <div >
            <ReactPlayer
              url={trackToPlay}
              playing
              controls
              width='200px'
              height='28px'
            />
          </div>
        </div>
      </span>
    )
  }
}

export default TrackIndex;
