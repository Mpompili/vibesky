import { connect } from 'react-redux';
import TrackIndexItem from './track_index_item';
import { fetchTrack, deleteTrack, updateTrack } from '../../actions/track_actions';
import { setCurrentTrack, setPlayPause  } from '../../actions/trackplayer_actions';
import { toggleLike } from '../../actions/like_actions'; 

const currentUserLikes = ({session: {currentUser}}, trackid) => {
  if (!currentUser || !currentUser.likes) return false; 
  return currentUser.likes.includes(parseInt(trackid)); 
};

const mapStateToProps = (state, ownProps) => ({
  comments: state.entities.comments, 
  errors: state.errors.tracks || [],
  trackplayer: state.trackplayer || {},
  currentUser: state.session.currentUser,
  loading: state.ui.loading,
  liked: currentUserLikes(state, ownProps.track.id)
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrack: (id) => dispatch(fetchTrack(id)),
  setCurrentTrack: (track) => dispatch(setCurrentTrack(track)),
  setPlayPause: (boolean) => dispatch(setPlayPause(boolean)),
  deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
  updateTrack: (track, id) => dispatch(updateTrack(track, id)),
  toggleLike: (trackId) => dispatch(toggleLike(trackId)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndexItem);
