import { connect } from 'react-redux';
import TrackForm from './track_form';
import { fetchTrack, createTrack, updateTrack } from '../../actions/track_actions';
// Object.keys(state.entities.tracks).map(key=> state.entities.tracks[key])

// tracks: state.entities.tracks || {},
const mapStateToProps = (state, ownProps) => ({
  currentUser:  state.session.currentUser,
  errors: state.errors.tracks || []
});

const mapDispatchToProps = (dispatch) => ({
  createTrack: (formData) => dispatch(createTrack(formData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackForm);
