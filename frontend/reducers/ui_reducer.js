import { REQUEST_FETCH_TRACK } from '../actions/track_actions'; 
import { RECEIVE_TRACK } from '../actions/comment_actions';

const UIReducer = (state = {loading: false}, action) => {
    Object.freeze(state);
    switch(action.type){
        case REQUEST_FETCH_TRACK:
            return {loading: true};  
        case RECEIVE_TRACK: 
            return {loading: false}; 
        default:
            return state; 
    }
};


export default UIReducer; 