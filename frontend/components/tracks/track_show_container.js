import { connect } from 'react-redux';
import TrackShow from './track_show';
import { fetchTrack, deleteTrack, updateTrack } from '../../actions/track_actions';
import { setCurrentTrack, setPlayPause  } from '../../actions/trackplayer_actions';

const mapStateToProps = (state, ownProps) => ({
  track: state.entities.tracks[ownProps.match.params.id],
  errors: state.errors.tracks || [],
  trackplayer: state.trackplayer || {},
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrack: (id) => dispatch(fetchTrack(id)),
  setCurrentTrack: (track) => dispatch(setCurrentTrack(track)),
  setPlayPause: (boolean) => dispatch(setPlayPause(boolean)),
  deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
  updateTrack: (track, id) => dispatch(updateTrack(track, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackShow);
