import { connect } from 'react-redux';
import TrackPlayer from './trackplayer';
import { setPlayPause } from '../../actions/trackplayer_actions';
import { createLike, deleteLike } from '../../actions/like_actions'; 

const mapStateToProps = (state, ownProps) => ({
  currentTrack: state.trackplayer.currentTrack,
  playing: state.trackplayer.playing,
  trackId: state.trackplayer.trackId,
  seek: state.trackplayer.seek
});

const mapDispatchToProps = (dispatch) => ({
  setPlayPause: (boolean) => dispatch(setPlayPause(boolean)),
  createLike: (trackId) => dispatch(createLike(trackId)),
  deleteLike: (id) => dispatch(deleteLike(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(TrackPlayer);
