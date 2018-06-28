import {connect } from 'react-redux';
import Search from './search'; 
import { fetchTracks } from '../../actions/track_actions'; 

const mapStateToProps = (state, ownProps) => ({
    tracks: state.entities.tracks || {},
    keys: Object.keys(state.entities.tracks),
    values: Object.values(state.entities.tracks) 
});

const mapDispatchToProps = (dispatch) => ({
    fetchTracks: () => dispatch(fetchTracks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);