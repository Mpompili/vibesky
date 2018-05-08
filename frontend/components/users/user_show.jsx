import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import WaveFormContainer from '../trackplayer/waveform_container';
import TrackItem from '../tracks/track_index_item_container'; 
import TrackIndex from '../tracks/track_index'; 
class UserShow extends React.Component {
  constructor(props) {
    super(props);
    // this.songButton = this.songButton.bind(this);
    this.state = {
      firstLoad: true,
      postlike: false
    };
    this.togglePostLike = this.togglePostLike.bind(this);
  }
  

  componentWillMount(){
    this.props.fetchUser(this.props.match.params.id); 
  }

 

  render(){
    let { tracks, trackplayer, currentUser, errors, user, likedTracks } = this.props;


    let userpic, useremail, userId; 
    if (user === undefined){
      userpic = '';
      useremail = ''; 
      userId = ''; 
    }else{
      userpic = user.imageUrl; 
      useremail = user.email; 
      userId = user.id; 
    }

    
    
    return (
      <div className='track-show-page'>
        <div className='user-show-container'>
          <div className='user-show-image-container'>
            <img src={userpic}/>
          </div>
          <div className='user-show-detail'>
            <div className='user-sd-top'>
              {/* <div className={buttonPlaying} onClick={(e) => this.songButton(track, e)}></div> */}
              <div className='user-sd-info'>
                {/* <div className='track-sd-uploader'>{useremail}</div> */}
                <div className='user-sd-title'>{useremail}</div>
              </div>
            </div>

          </div>
          <Link to={`/users/${userId}/edit`} className="controller-btn edit-btn">Edit</Link>
        </div>
          <div className='track-show-container-bottom'>
            <TrackIndex fetchTracks={this.props.fetchTracks} tracks={tracks} likedTracks={likedTracks} errors={errors} userpage={true} /> 
        </div>
      </div>
    );
  }
}

export default withRouter(UserShow);

