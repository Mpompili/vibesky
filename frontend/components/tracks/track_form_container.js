import { connect } from 'react-redux';
import TrackForm from './track_form';
import { createTrack } from '../../actions/track_actions';
// Object.keys(state.entities.tracks).map(key=> state.entities.tracks[key])

// tracks: state.entities.tracks || {},
const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.tracks || [],
  track: {title: '',
   description: '',
   uploader_id: state.session.currentUser.id,
   imageFile: null,
   imageUrl: null,
   audioFile: null,
   audioUrl: null,
  },
  formType: 'create'
});

const mapDispatchToProps = (dispatch) => ({
  action: (track) => dispatch(createTrack(track)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackForm);
