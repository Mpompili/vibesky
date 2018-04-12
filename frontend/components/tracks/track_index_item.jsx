import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import WaveFormContainer from '../trackplayer/waveform_container';
import CommentsContainer from '../comments/comments_container';

//will import track index item
class TrackItem extends React.Component {
  constructor(props) {
    super(props);
    this.songButton = this.songButton.bind(this);
    this.toggleLike = this.toggleLike.bind(this); 
  }
  //added for likes...
  // componentWillReceiveProps(newProps) {
  //   if (this.props.currentUser.liked !== newProps.currentUser.liked){
  //     console.log('new like toggle in index');
  //     this.props.fetchTrack(this.props.track.id); 
  //   }
  // }

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
    this.props.deleteTrack(trackId);
  }

  toggleLike(trackId, e){
    e.preventDefault();
    this.props.toggleLike(trackId);
  }

  componentDidMount() {
  }

  userTrackButtons() {
    let track = this.props.track;
    let likeButton =  this.props.liked ? 'controller-btn like-btn liked' : 'controller-btn like-btn'; 

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

  showComments(){
    if (this.props.trackplayer.trackId == this.props.track.id){
         return (
          <CommentsContainer track={this.props.track} />
         );
       }else{
         return (
           <div></div>
         );
       }
  }

  render(){
    let { track, trackplayer } = this.props;

    let buttonPlaying = (trackplayer.playing && trackplayer.trackId === track.id) ?
      'ti-play playing' : 'ti-play';
    let buttonBar = this.userTrackButtons();
    let commentShow = this.showComments();
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
            <a href={`/#/tracks/${track.id}`}><img src={track.imageUrl}/></a>
          </div>

          <section className='track-details'>
            <div className='td-top'>
              <div className={buttonPlaying} onClick={(e) => this.songButton(track, e)}>

              </div>
              <div className="ti-upload-det">
                <aside className="ti-description">{track.uploader}</aside>
                <a href={`/#/tracks/${track.id}`} className="ti-title">{track.title}</a>
              </div>
            </div>
            <div className='sound-bar'>
              <span></span>
              <WaveFormContainer track={track} height={60} color={'#000'}/>
            </div>
            <div className='ti-comment-bar'>
              {commentShow}
            </div>
            {buttonBar}
          </section>

        </div>

      </div>
    );
  }
}

export default TrackItem;
