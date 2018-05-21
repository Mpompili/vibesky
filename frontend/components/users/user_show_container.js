import { connect } from 'react-redux'; 
import UserShow from './user_show'; 
import { fetchTracks, deleteTrack, updateTrack } from '../../actions/track_actions';
import { setCurrentTrack, setPlayPause  } from '../../actions/trackplayer_actions';
import { fetchUser } from '../../actions/user_actions'; 
import { toggleLike } from '../../actions/like_actions'; 
import track_show from '../tracks/track_show';

const mapStateToProps = (state, ownProps) => {
    const tracks = Object.values(state.entities.tracks);
    const currentUser = state.session.currentUser; 
    const trackIds = tracks.map((track) => {
        return (track.uploaderId); 
    }); 
    const userId = ownProps.match.params.id; 

    let user;  
    Object.keys(state.entities.users).forEach(key=> {
        if (key == ownProps.match.params.id){
            user = state.entities.users[key];
        }
    }); 

    let postedTracks = tracks.filter((track) => {
       if (track.uploaderId == ownProps.match.params.id) return track; 
    }); 

    let likedTracks;
    if (user && user.id == currentUser.id) { 
        likedTracks = tracks.filter((track) => {
            if (currentUser.likes.includes(track.id)) return track;
        });
    } else if (user) {
        likedTracks = tracks.filter((track) => {
            if (user.likes.includes(track.id)) return track;
        });
    } else {
        likedTracks = tracks.filter((track) => {
            if (track.id == ownProps.match.params.id) return track; 
        });
    }
    return ({
        tracks: postedTracks,
        likedTracks: likedTracks,
        user: user,
        errors: state.errors.tracks || [],
        trackplayer: state.trackplayer || {},
        currentUser: state.session.currentUser,

    });
};

const mapDispatchToProps = (dispatch) => ({
    fetchTracks: () => dispatch(fetchTracks()),
    fetchUser: (id) => dispatch(fetchUser(id)), 
    setCurrentTrack: (track) => dispatch(setCurrentTrack(track)),
    setPlayPause: (boolean, trackId, progress) => dispatch(setPlayPause(boolean, trackId, progress)),
    deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
    updateTrack: (track, id) => dispatch(updateTrack(track, id)),
    toggleLike: (trackId) => dispatch(toggleLike(trackId))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
  