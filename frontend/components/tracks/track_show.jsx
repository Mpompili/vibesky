import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import WaveFormContainer from '../trackplayer/waveform_container';
import CommentsContainer from '../comments/comments_container';
import CommentIndexContainer from '../comments/comments_index_container';

class TrackShow extends React.Component {
  constructor(props) {
    super(props);
    this.songButton = this.songButton.bind(this);
    this.state = {
      firstLoad: true
    };
  }
  
  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id){
      this.props.fetchTrack(newProps.match.params.id);
    }

    if (this.state.firstLoad || this.props.loading) return;
    let { playing, trackId, player, progressTrackId } = this.props.trackplayer;
    let trackProg = progressTrackId[this.props.track.id];
    let thisId = this.props.track.id;

    if (playing && (trackId == thisId) && (thisId !== newProps.trackplayer.trackId)) {
      let prog = trackProg ? trackProg : player.getCurrentTime() / player.getDuration();
      this.props.setProg(thisId, prog);  
    }
  }

  componentDidMount(){
    this.props.fetchTrack(this.props.match.params.id)
    .then(()=> {
      this.setState({firstLoad: false});
      this.props.fetchUser(this.props.track.uploaderId);
    }
    );
  }
  
  songButton(track, e) {
    e.preventDefault();
    let { currentTrack, playing, trackId } = this.props.trackplayer;
    let tplayer = this.props.trackplayer.player; 
    let trackProg = this.props.trackplayer.progressTrackId[this.props.track.id];
    let prog; 

    if (trackId == -1) {
      // this.props.setCurrentTrack(track);
      this.props.setPlayPause(!playing, track.id, 0);
    } else if (track.id == trackId) { //if we are pausing the same song
      // then we will update the progress of this track
      prog = trackProg ? trackProg : tplayer.getCurrentTime() / tplayer.getDuration();
      
      this.props.setPlayPause(!playing, track.id, prog);
    } else { // track.id !== trackId - we are switching songs 
      prog = trackProg ? trackProg : 0;
      this.props.setPlayPause(!playing, track.id, prog);
    }//
  }

  deleteSong(trackId, e){
    e.preventDefault();
    this.props.deleteTrack(trackId).then(()=> this.props.history.push('/tracks'));
  }

  userTrackButtons() {
    let track = this.props.track;
    let likeButton =  this.props.liked ? 'controller-btn like-btn liked' : 'controller-btn like-btn'; 
    if (this.props.currentUser.id == track.uploaderId){
      return (
        <div className='button-bar'>
          <div className={likeButton} onClick={() => this.props.toggleLike(track.id)}>like</div>
          <Link to={`/tracks/${track.id}/edit`} className="controller-btn edit-btn">Edit</Link>
          <div className='controller-btn delete-btn' onClick={(e) => this.deleteSong(track.id, e)}>Delete</div>
        </div>
      );}else{
        return (
          <div className='button-bar'>
            <div className={likeButton} onClick={() => this.props.toggleLike(track.id)}>like</div>
          </div>
        );}
  }

  deleteSong(trackId, e){
    e.preventDefault();
    this.props.deleteTrack(trackId);
    this.props.history.push('/tracks');
  }

  render(){
    let { track, trackplayer, comments, loading, currentUser, deleteTrack } = this.props;
  
    if (this.state.firstLoad || loading) return (<div>loading</div>);
    let user = this.props.users[track.uploaderId] || track;
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
                <a href={`/#/users/${track.uploaderId}`}><div className='track-sd-uploader'>{track.uploader}</div></a> 
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
            <div className='tscb-left'>
              <div className='track-show-comment-bar'>
                <CommentsContainer track={track}/>
              </div>
              { buttonBar }
              <div className='ts-uploader-ci'>
                <div className='ts-uc-left'>
                  <div className='ts-artist-circle'>
                  <a href={`/#/users/${track.uploaderId}`}><img src={user.imageUrl}/></a> 
                  </div>
                  <a href={`/#/users/${track.uploaderId}`}><div className='ts-artist-name'>{track.uploader}</div></a> 
                  <div className='ts-follow-btn'>Follow</div> 
                </div> 
                <div className='ts-uc-right'>
                  <div className='ts-track-description'>{track.description}</div> 
                  <div className='track-show-comment-index'>
                    <CommentIndexContainer track={track}/> 
                  </div> 
                </div> 
              </div> 
            </div>
            <div className='tscb-sidebar'>
              <div className="ad-container">
                <a href="https://github.com/Mpompili" target="_blank"><img src="https://res.cloudinary.com/mpompili/image/upload/v1526013412/gotogithub.jpg"/></a> 
              </div> 
              <div className="ad-container">
                <a href="https://www.linkedin.com/in/michael-pompili-916a0837/" target="_blank"><img src="https://res.cloudinary.com/mpompili/image/upload/v1526335358/linkedinad.jpg"/></a> 
              </div> 
              <div className="extraspace"></div> 
            </div>
        </div>
      </div>
    );
  }
}

export default withRouter(TrackShow);

// <div className='comment-container'>
//   <div className='comment-form'>
//     <div className='comment-form-user'>
//       <img src={track.imageUrl}/>
//     </div>
//     <div className='comment-input-container'>
//       <input className='comment-input' type='text' placeholder='Write a Comment'/>
//     </div>
//   </div>
//   <div className='comment-buttons'></div>
// </div>
