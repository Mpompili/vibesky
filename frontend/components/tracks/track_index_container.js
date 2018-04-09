import { connect } from 'react-redux';
import TrackIndex from './track_index';
import { fetchTracks, fetchTrack } from '../../actions/track_actions';
import { setCurrentTrack, setPlayPause  } from '../../actions/trackplayer_actions';
// Object.keys(state.entities.tracks).map(key=> state.entities.tracks[key])
const mapStateToProps = (state, ownProps) => ({
  tracks: state.entities.tracks || {},
  errors: state.errors.tracks || [],
  trackplayer: state.trackplayer || {}
});

const mapDispatchToProps = (dispatch) => ({
  fetchTracks: () => dispatch(fetchTracks()),
  fetchTrack: (id) => dispatch(fetchTrack(id)),
  setCurrentTrack: (track) => dispatch(setCurrentTrack(track)),
  setPlayPause: (boolean) => dispatch(setPlayPause(boolean)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndex);
