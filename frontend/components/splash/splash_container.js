import { connect } from 'react-redux';
import splash from './splash';
import { signup, login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  path: ownProps.location.pathname.slice(1),
  errors: {}
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    submitForm: ownProps.location.pathname.slice(1) === 'login' ?
      (user) => dispatch(login(user)) :
      (user) => dispatch(signup(user)),
});


export default connect(mapStateToProps, mapDispatchToProps)(splash);
