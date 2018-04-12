import { connect } from 'react-redux';
import TrackShow from './track_show';
import { fetchTrack, deleteTrack, updateTrack } from '../../actions/track_actions';
import { setCurrentTrack, setPlayPause  } from '../../actions/trackplayer_actions';
import { createLike, deleteLike } from '../../actions/like_actions'; 

const mapStateToProps = (state, ownProps) => ({
  track: state.entities.tracks[ownProps.match.params.id],
  comments: state.entities.comments, 
  errors: state.errors.tracks || [],
  trackplayer: state.trackplayer || {},
  currentUser: state.session.currentUser,
  loading: state.ui.loading
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrack: (id) => dispatch(fetchTrack(id)),
  setCurrentTrack: (track) => dispatch(setCurrentTrack(track)),
  setPlayPause: (boolean) => dispatch(setPlayPause(boolean)),
  deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
  updateTrack: (track, id) => dispatch(updateTrack(track, id)),
  createLike: (trackId) => dispatch(createLike(trackId)),
  deleteLike: (id) => dispatch(deleteLike(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);
