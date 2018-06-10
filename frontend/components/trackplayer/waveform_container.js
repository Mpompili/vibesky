import { connect } from 'react-redux';
import WaveForm from './waveform';
import { updateTrack } from '../../actions/track_actions'; 
import { endCurrentTrack, seekTrack, seekWaveForm, setPlayPause } from '../../actions/trackplayer_actions';

const mapStateToProps = (state, ownProps) => ({
  currentTrack: state.trackplayer.currentTrack,
  playing: state.trackplayer.playing && state.trackplayer.trackId == ownProps.track.id,
  trackId: state.trackplayer.trackId,
  player: state.trackplayer.player,
  prevSeek: state.trackplayer.playerSeek, 
  prevProg: state.trackplayer.progressTrackId[ownProps.track.id] || null
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    endCurrentTrack: () => dispatch(endCurrentTrack()),
    seekTrack: (seconds) => dispatch(seekTrack(seconds)),
    seekWaveForm: (progress) => dispatch(seekWaveForm(progress, ownProps.track.id)),
    setPlayPause: (boolean, trackId, progress) => dispatch(setPlayPause(boolean, trackId, progress)),
    updateTrack: (track, id) => dispatch(updateTrack(track, id))
});


export default connect(mapStateToProps, mapDispatchToProps)(WaveForm);
