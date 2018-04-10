import React from 'react';
import { connect } from 'react-redux';
import TrackForm from './track_form';
import { fetchTrack, updateTrack } from '../../actions/track_actions';
// Object.keys(state.entities.tracks).map(key=> state.entities.tracks[key])

// tracks: state.entities.tracks || {},
const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.tracks || [],
  track: state.entities.tracks[ownProps.match.params.id],
  formType: 'update'
});

const mapDispatchToProps = (dispatch) => ({
  fetchTrack: (id) => dispatch(fetchTrack(id)),
  action: (track, id) => dispatch(updateTrack(track, id))
});

class EditTrackForm extends React.Component {
  componentDidMount(){
    this.props.fetchTrack(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.track.id != nextProps.match.params.id) {
      this.props.fetchTrack(nextProps.match.params.id);
    }
  }

  render() {
    const { action, formType, track } = this.props;
    return (
      <TrackForm
        action={action}
        formType={formType}
        track={track} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTrackForm);
