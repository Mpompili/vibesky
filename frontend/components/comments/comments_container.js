import { connect } from 'react-redux';
import Comments from './comments';
import { createComment } from '../../actions/comment_actions'; 
import { fetchTrack } from '../../actions/track_actions'; 

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.tracks || [],
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createComment: (comment, id) => dispatch(createComment(comment, id)),
  fetchTrack: (id) => dispatch(fetchTrack(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
