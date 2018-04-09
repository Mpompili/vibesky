import { connect } from 'react-redux';
import WaveForm from './waveform';
import { endCurrentTrack } from '../../actions/trackplayer_actions';

const mapStateToProps = (state, ownProps) => ({
  currentTrack: state.trackplayer.currentTrack,
  playing: state.trackplayer.playing,
  trackId: state.trackplayer.trackId
});

const mapDispatchToProps = (dispatch) => ({
    playTrack: (url) => dispatch(playTrack(url)),
    endCurrentTrack: () => dispatch(endCurrentTrack())
});


export default connect(mapStateToProps, mapDispatchToProps)(WaveForm);
