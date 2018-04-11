import { connect } from 'react-redux';
import CommentIndex from './comment_index';

//ownProps.match.params.id may be track_id 

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.tracks || [],
  currentUser: state.session.currentUser,
  comments: state.entities.comments || {} 
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
