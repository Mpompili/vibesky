import { connect } from 'react-redux';
import WaveForm from './waveform';
import { endCurrentTrack, seekTrack } from '../../actions/trackplayer_actions';

const mapStateToProps = (state, ownProps) => ({
  currentTrack: state.trackplayer.currentTrack,
  playing: state.trackplayer.playing,
  trackId: state.trackplayer.trackId
});

const mapDispatchToProps = (dispatch) => ({
    endCurrentTrack: () => dispatch(endCurrentTrack()),
    seekTrack: (seconds) => dispatch(seekTrack(seconds))
});


export default connect(mapStateToProps, mapDispatchToProps)(WaveForm);
