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

  componentWillReceiveProps(newProps){
    // debugger;
    if (this.props.user){
      if (this.props.user.id != newProps.match.params.id){
        console.log('detect siwtch'); 
        this.props.fetchUser(newProps.match.params.id); 
        this.setState({postlike: !this.state.postlike}); 
      }
    }
  }

  togglePostLike(){
    console.log('wtf'); 
    this.setState({
      postlike: !this.state.postlike
    });
    console.log('this is state', this.state); 
    console.log('this is props', this.props); 
  }
 

  render(){
    let { tracks, trackplayer, currentUser, errors, user, likedTracks } = this.props;

    console.warn('liked tracks: ', likedTracks); 
    let userpic, useremail, userId, tag1, tag2, tIndex; 
    if (user === undefined){
      userpic = '';
      useremail = ''; 
      userId = ''; 
    }else{
      userpic = user.imageUrl; 
      useremail = user.email; 
      userId = user.id; 
    }
     if (this.state.postlike){
       tag1 = 'ti-tab';
       tag2 = 'ti-tab ttmid tagpicked';
       tIndex = (<TrackIndex fetchTracks={this.props.fetchTracks} tracks={likedTracks} errors={errors} userpage={true} />);
     } else {
       tag1 = 'ti-tab tagpicked';
       tag2 = 'ti-tab ttmid'; 
       tIndex = (<TrackIndex fetchTracks={this.props.fetchTracks} tracks={tracks} errors={errors} userpage={true} /> );
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
          <span className='track-index-page-container'>
            <div className='track-index-container'>
              <ul className='track-index-tabs'>
                <li className={tag1}><a onClick={()=> this.togglePostLike()}>Tracks</a></li>
                <li className={tag2}><a onClick={()=> this.togglePostLike()}>Liked</a></li>
              </ul>
              {tIndex}
            {/* <TrackIndex fetchTracks={this.props.fetchTracks} tracks={tracks} errors={errors} userpage={true} />  */}
            </div> 
            <div className="sidebar-placeholder"></div>
          </span>
        </div>
      </div>
    );
  }
}

export default withRouter(UserShow);

