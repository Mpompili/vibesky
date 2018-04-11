import { connect } from 'react-redux';
import Comments from './comments';
import { createComment } from '../../actions/comment_actions'; 

// import { fetchTracks, fetchTrack, deleteTrack } from '../../actions/track_actions';
// import { setCurrentTrack, setPlayPause  } from '../../actions/trackplayer_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.tracks || [],
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createComment: (comment, id) => dispatch(createComment(comment, id))
  // fetchTracks: () => dispatch(fetchTracks()),
  // fetchTrack: (id) => dispatch(fetchTrack(id)),
  // setCurrentTrack: (track) => dispatch(setCurrentTrack(track)),
  // setPlayPause: (boolean) => dispatch(setPlayPause(boolean)),
  // deleteTrack: (trackId) => dispatch(deleteTrack(trackId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
