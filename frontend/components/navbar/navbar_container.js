import { connect } from 'react-redux';
import navbar from './navbar';
import { logout } from '../../actions/session_actions';
import { fetchTracks } from '../../actions/track_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(navbar);
