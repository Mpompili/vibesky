import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import WaveFormContainer from '../trackplayer/waveform_container';
import TrackItem from '../tracks/track_index_item_container'; 
import TrackIndex from '../tracks/track_index'; 
class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstLoad: true,
      postlike: false
    };
    this.togglePostTracks = this.togglePostTracks.bind(this);
    this.togglePostLikes = this.togglePostLikes.bind(this);
  }
  

  componentWillMount(){
    this.props.fetchUser(this.props.match.params.id); 
  }

  componentWillReceiveProps(newProps){
    if (this.props.user){
      if (this.props.user.id != newProps.match.params.id){
        this.props.fetchUser(newProps.match.params.id); 
        this.setState({postlike: false}); 
      }
    }
  }

  togglePostTracks() {
    this.setState({
      postlike: false
    });
  }


  togglePostLikes() {
    this.setState({
      postlike: true
    });
  }

 

  render(){
    let { tracks, trackplayer, currentUser, errors, user, likedTracks } = this.props;

    let tag1, tag2, tIndex, editUser, userName, about, aboutstyle; 
    if (user === undefined){
      return (<div></div>); 
      // userpic = '';
      // useremail = ''; 
      // userId = ''; 
    }else{
      if (currentUser.id == user.id){
       
        editUser = (<Link to={`/users/${user.id}/edit`} className="edit-user-prof">Edit Profile</Link>);
      } else {
        editUser = (<span style={{display: 'none'}}></span>); 
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
      
      userName = (user.username == null) ? user.email : user.username; 
      if (user.about == null) {
        about = null;
        aboutstyle = "no-about";
      }
      else {
        about = user.about;
        aboutstyle = "about-user";
      }

    }
   
    return (
      <div className='track-show-page'>
        <div className='user-show-container'>
          <div className='user-show-image-container'>
            <img src={user.imageUrl}/>
            {editUser} 
          </div>
          <div className='user-show-detail'>
            <div className='user-sd-top'>
             
              <div className='user-sd-info'>
              
                <div className='user-sd-title'>{userName}</div>
                <div className='user-sd-other'>{user.email}</div>
                <div className='user-sd-other'>{user.location || "vibesphere, Earth"}</div>
              </div>
            </div>

          </div>
    
        </div>
          <div className='track-show-container-bottom'>
          <span className='track-index-page-container'>
            <div className='track-index-container'>
              <ul className='track-index-tabs'>
                <li className={tag1}><a onClick={()=> this.togglePostTracks()}>Tracks</a></li>
                <li className={tag2}><a onClick={()=> this.togglePostLikes()}>Liked</a></li>
              </ul>
              {tIndex}
           
            </div> 
            <div className="sidebar-placeholder">
              <div className="user-stats">
                <div className="us-track-num">
                  <p>Tracks</p>
                  <p>{parseInt(tracks.length)}</p> 
                </div> 
                <div className="vertical-line"></div>
                <div className="us-track-num">
                  <p>Liked Tracks</p>
                  <p>{parseInt(likedTracks.length)}</p> 
                </div> 
              </div> 
              <div className={aboutstyle}>{about}</div> 
              <div className="ad-container">
                <a href="https://github.com/Mpompili" target="_blank"><img src="https://res.cloudinary.com/mpompili/image/upload/v1526013412/gotogithub.jpg"/></a>  
              </div> 
              <div className="ad-container">
                <a href="https://www.linkedin.com/in/michael-pompili-916a0837/" target="_blank"><img src="https://res.cloudinary.com/mpompili/image/upload/v1526335358/linkedinad.jpg"/></a> 
              </div> 
              <div className="extraspace"></div> 
            </div>
          </span>
        </div>
      </div>
    );
  }
}

export default withRouter(UserShow);

