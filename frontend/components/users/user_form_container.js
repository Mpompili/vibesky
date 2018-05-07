import React from 'react';
import { connect } from 'react-redux';
import UserForm from './user_form';
import { fetchUser, updateUser } from '../../actions/user_actions';
// Object.keys(state.entities.tracks).map(key=> state.entities.tracks[key])

// tracks: state.entities.tracks || {},
const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.tracks || [],
  user: state.entities.users[ownProps.match.params.id],
  formType: 'update'
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  updateUser: (user, id) => dispatch(updateUser(user, id))
});

class EditUserForm extends React.Component {
  componentDidMount(){
    this.props.fetchUser(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user.id != nextProps.match.params.id) {
      this.props.fetchUser(nextProps.match.params.id);
    }
  }

  render() {
    const { user } = this.props;
    return (
      <UserForm
        updateUser={updateUser}
        user={user} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
