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

  getctime(){
    let tesst = this.reactplayer.getCurrentTime();
    let durationn = this.reactplayer.getDuration();

    var measuredTime = new Date(null);
    measuredTime.setSeconds(tesst); // specify value of SECONDS
    var MHSTime = measuredTime.toISOString().substr(14, 5);
    console.log(MHSTime);

    var measuredTime2 = new Date(null);
    measuredTime2.setSeconds(durationn); // specify value of SECONDS
    var MHSTime2 = measuredTime2.toISOString().substr(14,5);
    console.log(MHSTime2);
  }

  render(){
    // <li>{tracks[key].title},<br/>{tracks[key].image}</li>
    let { tracks, errors, trackplayer, setCurrentTrack, setPlayPause } = this.props;
    // let reactplayer =  node => this.reactplayer = node;
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

    // let trackToPlay;
    // if (trackplayer.currentTrack == null){
    //   console.log('current track in trackplayer is null');
    //   trackToPlay = '';}
    //    else {
    //      console.log('now it is not null');
    //      trackToPlay = trackplayer.currentTrack.audioUrl;
    //      console.log(trackToPlay);
    //     };

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
          <div>
          <button onClick={this.getctime.bind(this)}>get current time</button>
          </div>
        </div>
      </span>
    )
  }
}

export default TrackIndex;

// <ReactPlayer
//   ref={reactplayer}
//   url={trackToPlay}
//   playing={trackplayer.playing}
//   controls
//   progressInterval
//   width='200px'
//   height='28px'
// />
