import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import TrackFormContainer from './track_form_container';
import TrackItem from './track_index_item';

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
    let { tracks, errors } = this.props;
    let trackItems = Object.keys(tracks).map(key => (
      <TrackItem key={key} track={tracks[key]} />
    ));
    let styledErrors = errors.map(err => <li><br/>{err}</li>);

    return (
      <div className='track-index-container'>
        <ul className='track-index-tabs'>
          <li className='ti-tab'><a href='/#/tracks'>Stream</a></li>
          <li className='ti-tab ttmid'><a href='/#/tracks'>Discover</a></li>
        </ul>
        <div className="track-index">
          {trackItems}
        </div>
        <br/>
        <TrackFormContainer />
      </div>
    )
  }
}

export default TrackIndex;
