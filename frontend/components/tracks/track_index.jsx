import React from 'react';
import { Link, Redirect } from 'react-router-dom';
//will import track index item
class TrackIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchTracks();
  }

  render(){

    let { tracks, errors } = this.props;
    let trackIndex = Object.keys(tracks).map(key => <li>{tracks[key].title}</li>);
    let styledErrors = errors.map(err => <li><br/>{err}</li>);

    return (
      <div id='track-index-container'>
        <div className="track-index">
          {trackIndex}
        </div>
      </div>
    )
  }
}

export default TrackIndex;
