import React from 'react'; 
import CommentIndexItem from './comment_index_item'; 

class CommentIndex extends React.Component{
    constructor(props){
        super(props);
    }



    render(){
        let { track, comments, currentUser, deleteComment } = this.props; 
        let trackComments = track.commentIds.map(id => (
            <CommentIndexItem key={id} track={track} currentUser={currentUser} id={id} deleteComment={deleteComment} comment={comments[id]}/>
        ));


        return(
            <div className='tsc-container'>
            { trackComments }
            </div> 
        );
    }

}

export default CommentIndex; 