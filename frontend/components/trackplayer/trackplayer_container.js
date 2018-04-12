import { connect } from 'react-redux';
import TrackPlayer from './trackplayer';
import { setPlayPause } from '../../actions/trackplayer_actions';
import { toggleLike } from '../../actions/like_actions'; 
import { fetchTrack } from '../../actions/track_actions';

const currentUserLikes = ({session: {currentUser}, trackplayer: {currentTrack}}) => {
  if (!currentUser || !currentTrack) return false; 
  return currentUser.likes.includes(parseInt(currentTrack.id)); 
}

const mapStateToProps = (state, ownProps) => ({
  currentTrack: state.trackplayer.currentTrack,
  playing: state.trackplayer.playing,
  trackId: state.trackplayer.trackId,
  seek: state.trackplayer.seek,
  liked: currentUserLikes(state)
});

const mapDispatchToProps = (dispatch) => ({
  setPlayPause: (boolean) => dispatch(setPlayPause(boolean)),
  toggleLike: (trackId) => dispatch(toggleLike(trackId)), 
  fetchTrack: (id) => dispatch(fetchTrack(id)) 

});


export default connect(mapStateToProps, mapDispatchToProps)(TrackPlayer);
