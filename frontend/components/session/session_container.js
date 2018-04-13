import { connect } from 'react-redux';
import sessionForm from './session';
import { signup, login, clearErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { fetchTracks } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) =>({
  path: ownProps.location.pathname.slice(1),
  errors: state.errors.session || []
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    submitForm: ownProps.location.pathname.slice(1) === 'home/login' ?
      (user) => dispatch(login(user)) :
      (user) => dispatch(signup(user)),
    demoSumit: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
});


export default connect(mapStateToProps, mapDispatchToProps)(sessionForm);
