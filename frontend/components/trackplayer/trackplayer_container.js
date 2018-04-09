import { connect } from 'react-redux';
import TrackPlayer from './trackplayer';
import { setPlayPause } from '../../actions/trackplayer_actions';

const mapStateToProps = (state, ownProps) => ({
  currentTrack: state.trackplayer.currentTrack,
  playing: state.trackplayer.playing,
  trackId: state.trackplayer.trackId
});

const mapDispatchToProps = (dispatch) => ({
  setPlayPause: (boolean) => dispatch(setPlayPause(boolean)),
});


export default connect(mapStateToProps, mapDispatchToProps)(TrackPlayer);
