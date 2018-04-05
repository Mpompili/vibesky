import { connect } from 'react-redux';
import sessionForm from './session';
import { signup, login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = (state, ownProps) =>{
console.log(state);
let thangs = {
  path: ownProps.location.pathname.slice(1),
  errors: state.errors
};
console.log(thangs);
return thangs;
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    submitForm: ownProps.location.pathname.slice(1) === 'login' ?
      (user) => dispatch(login(user)) :
      (user) => dispatch(signup(user)),
});


export default connect(mapStateToProps, mapDispatchToProps)(sessionForm);
