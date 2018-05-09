import React from 'react';
import { connect } from 'react-redux';
import UserForm from './user_form';
import { fetchUser, updateUser } from '../../actions/user_actions';
// Object.keys(state.entities.tracks).map(key=> state.entities.tracks[key])

// tracks: state.entities.tracks || {},
const mapStateToProps = (state, ownProps) => {
    return ({
    errors: state.errors.tracks || [],
    user: state.entities.users[ownProps.match.params.id],
    formType: 'update',
    currentUser: state.session.currentUser
    });
};
const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  updateUser: (user, id) => dispatch(updateUser(user, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
