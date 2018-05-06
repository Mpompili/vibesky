import { connect } from 'react-redux'; 
import UserShow from './user_show'; 
import { fetchTracks, deleteTrack, updateTrack } from '../../actions/track_actions';
import { setCurrentTrack, setPlayPause  } from '../../actions/trackplayer_actions';
import { fetchUser } from '../../actions/user_actions'; 
import { toggleLike } from '../../actions/like_actions'; 
import track_show from '../tracks/track_show';

const mapStateToProps = (state, ownProps) => {
    // debugger;
    const tracks = Object.values(state.entities.tracks);
    
    const trackIds = tracks.map((track) => {
        return (track.uploaderId); 
    }); 
    
    const userTracks = tracks.filter((track) => {
       if (track.uploaderId == ownProps.match.params.id) return track; 
    }); 
    console.warn('this is userTracks:', userTracks); 

    return ({
        tracks: userTracks,
        user: state.entities.users,
        errors: state.errors.tracks || [],
        trackplayer: state.trackplayer || {},
        currentUser: state.session.currentUser,
        // user: state. NEED TO GET USER STUFF
    });
};

const mapDispatchToProps = (dispatch) => ({
    fetchTracks: () => dispatch(fetchTracks()),
    fetchUser: (id) => dispatch(fetchUser(id)), 
    setCurrentTrack: (track) => dispatch(setCurrentTrack(track)),
    setPlayPause: (boolean) => dispatch(setPlayPause(boolean)),
    deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
    updateTrack: (track, id) => dispatch(updateTrack(track, id)),
    toggleLike: (trackId) => dispatch(toggleLike(trackId))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
  