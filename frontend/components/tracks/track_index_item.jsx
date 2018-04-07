import React from 'react';
import { Link, Redirect } from 'react-router-dom';

//will import track index item
class TrackItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    let { track } = this.props;
    
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
              <div className="ti-play"></div>
              <div className="ti-upload-det">
                <aside className="ti-description">{track.uploader}</aside>
                <aside className="ti-title">{track.title}</aside>
              </div>
            </div>
            <div className='sound-bar'>soundbar</div>
            <div className='button-bar'>buttonbar</div>
          </section>

        </div>

      </div>
    )
  }
}

export default TrackItem;
