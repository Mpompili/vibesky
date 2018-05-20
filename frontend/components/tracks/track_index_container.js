import { connect } from 'react-redux';
import TrackIndex from './track_index';
import { fetchTracks, fetchTrack, deleteTrack } from '../../actions/track_actions';
import { setCurrentTrack, setPlayPause  } from '../../actions/trackplayer_actions';
import { createLike, deleteLike } from '../../actions/like_actions'; 

// Object.keys(state.entities.tracks).map(key=> state.entities.tracks[key])

const mapStateToProps = (state, ownProps) => ({
  tracks: state.entities.tracks || {},
  errors: state.errors.tracks || [],
  trackplayer: state.trackplayer || {},
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchTracks: () => dispatch(fetchTracks()),
  fetchTrack: (id) => dispatch(fetchTrack(id)),
  setCurrentTrack: (track) => dispatch(setCurrentTrack(track)),
  setPlayPause: (boolean, trackId, progress) => dispatch(setPlayPause(boolean, trackId, progress)),
  deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
  createLike: (trackId) => dispatch(createLike(trackId)),
  deleteLike: (id) => dispatch(deleteLike(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndex);
