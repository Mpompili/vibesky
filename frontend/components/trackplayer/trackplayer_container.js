import { connect } from 'react-redux';
import TrackPlayer from './trackplayer';
import { setPlayPause, setTrackPlayer, seekPlayer, endCurrentTrack } from '../../actions/trackplayer_actions';
import { toggleLike } from '../../actions/like_actions'; 
import { fetchTrack } from '../../actions/track_actions';

const currentUserLikes = ({session: {currentUser}, trackplayer: {trackId}}) => {
  if (trackId == -1) return false; 
  return currentUser.likes.includes(parseInt(trackId)); 
};

const mapStateToProps = (state, ownProps) => ({
  // currentTrack: state.trackplayer.currentTrack,
  currentTrack: state.entities.tracks[state.trackplayer.trackId],
  playing: state.trackplayer.playing,
  trackId: state.trackplayer.trackId,
  seek: state.trackplayer.seek,
  player: state.trackplayer.player, 
  trackplayer: state.trackplayer,
  liked: currentUserLikes(state)
});

const mapDispatchToProps = (dispatch) => ({
  setPlayPause: (boolean, trackId, progress) => dispatch(setPlayPause(boolean, trackId, progress)),
  toggleLike: (trackId) => dispatch(toggleLike(trackId)), 
  fetchTrack: (id) => dispatch(fetchTrack(id)),
  setTrackPlayer: (trackplayer) => dispatch(setTrackPlayer(trackplayer)),
  seekPlayer: (progress) => dispatch(seekPlayer(progress)),
  endCurrentTrack: (id) => dispatch(endCurrentTrack(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(TrackPlayer);
