import { connect } from 'react-redux';
import TrackIndex from './track_index';
import { fetchTracks, fetchTrack, } from '../../actions/track_actions';
// Object.keys(state.entities.tracks).map(key=> state.entities.tracks[key])
const mapStateToProps = (state, ownProps) => ({
  tracks: state.entities.tracks || {},
  errors: state.errors.tracks || []
});

const mapDispatchToProps = (dispatch) => ({
  fetchTracks: () => dispatch(fetchTracks()),
  fetchTrack: (id) => dispatch(fetchTrack(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndex);
