import { connect } from 'react-redux';
import WaveForm from './waveform';

const mapStateToProps = (state, ownProps) => ({
  currentTrack: state.trackplayer.currentTrack,
  playing: state.trackplayer.playing
});

const mapDispatchToProps = (dispatch) => ({
    playTrack: (url) => dispatch(playTrack(url))
});


export default connect(mapStateToProps, mapDispatchToProps)(WaveForm);
