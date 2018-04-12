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
      console.log('willreceiveprops');
      this.props.fetchTrack(newProps.match.params.id);
    }
  }

  componentDidMount(){
    this.props.fetchTrack(this.props.match.params.id)
    .then(()=> this.setState({firstLoad: false}));
  }
  
  songButton(track, e) {
    e.preventDefault();
    let { currentTrack, playing, trackId } = this.props.trackplayer;
    if (currentTrack === null) {
      this.props.setCurrentTrack(track);
    }
    if (currentTrack !== null && trackId == track.id) {
        this.props.setPlayPause(!playing);
      } else {
        this.props.setCurrentTrack(track);
      }
  }

  deleteSong(trackId, e){
    e.preventDefault();
    this.props.deleteTrack(trackId).then(()=> this.props.history.push('/tracks'));
  }

  toggleLike(trackId, e){
    e.preventDefault();

    if (this.props.track.liked) {
      this.props.deleteLike(this.props.track.likeId);
    }else{
      this.props.createLike(trackId);
    }
  }

  userTrackButtons() {
    let track = this.props.track;
    let likeButton =  track.liked ? 'controller-btn like-btn liked' : 'controller-btn like-btn'; 
    if (this.props.currentUser.id == track.uploaderId){
      return (
        <div className='button-bar'>
          <div className={likeButton} onClick={(e) => this.toggleLike(track.id, e)}>like</div>
          <Link to={`/tracks/${track.id}/edit`} className="controller-btn edit-btn">Edit</Link>
          <div className='controller-btn delete-btn' onClick={(e) => this.deleteSong(track.id, e)}>Delete</div>
        </div>
      );}else{
        return (
          <div className='button-bar'>
            <div className={likeButton} onClick={(e) => this.toggleLike(track.id, e)}>like</div>
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
                <div className='track-sd-uploader'>{track.uploader}</div>
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
                    <img src={track.imageUrl}/> 
                  </div>
                  <div className='ts-artist-name'>{track.uploader}</div>
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
