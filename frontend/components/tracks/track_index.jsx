import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import TrackFormContainer from './track_form_container';
import TrackItem from './track_index_item_container';
import ReactPlayer from 'react-player';

//will import track index item
class TrackIndex extends React.Component {
  constructor(props) {
    super(props);
  } 
  
  // componentWillReceiveProps(newProps){

  //   if (Object.keys(this.props.tracks).length < Object.keys(newProps.tracks).length){
  //     this.props.fetchTracks(); 
  //   }
    
  // }

  componentDidMount() {
    this.props.fetchTracks();
  }

  render(){

    let { tracks, errors } = this.props;
    let trackItems = Object.keys(tracks).map(key => (
      <TrackItem key={key} track={tracks[key]} user={this.props.user || null} />
    ));

    let indexTab;
     if (this.props.userpage) {
      return (
        <div className="track-index">
          {trackItems}
        </div>);
     } else {
      return (
        <span className='track-index-page-container'>
        <div className='track-index-container invisi-scroll'>
          <ul className='track-index-tabs'>
            <li className='ti-tab'><a href='/#/tracks'>Stream</a></li>
            {/* <li className='ti-tab ttmid'><a href='/#/tracks'>Discover</a></li> */}
          </ul> 
          <div className="track-index">
            {trackItems}
          </div>
        </div> 
          <div className="sidebar-placeholder">
            <div className="ad-container">
              <a href="https://github.com/Mpompili" target="_blank"><img src="https://res.cloudinary.com/mpompili/image/upload/v1526013412/gotogithub.jpg"/></a>  
            </div> 
            <div className="ad-container">
              <a href="https://www.linkedin.com/in/michael-pompili-916a0837/" target="_blank"><img src="https://res.cloudinary.com/mpompili/image/upload/v1526335358/linkedinad.jpg"/></a>
            </div> 
          </div>
      </span>
        );
     }

    // let styledErrors = errors.map(err => <li>{err}</li>);
    // return (
    //   <span> 
    //   {indexTab}
    //   </span> 
    // );
  }
}

export default TrackIndex;
