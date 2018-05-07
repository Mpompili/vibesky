import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
  
  }

  deleteComment(e) {
    e.preventDefault(); 
    let { id }= this.props;
    this.props.deleteComment(id); 
  }

  userTrackButtons() {
    let { track, deleteComment, currentUser, id } = this.props;
    
    if (this.props.currentUser.email == this.props.comment.user)
    {
      return (
        <div className='comment-index-button' onClick={(e)=> this.deleteComment(e)}></div>
      );}else{
        return (
          <div></div> 
        );}
  }

  render() {
      let { track, id, comment } = this.props;
      let userButton = this.userTrackButtons(); 
      return (
            <div className='posted-comment'>
                <div className='comment-uploader-img'>
                    <img src={comment.user.imageUrl}/> 
                </div>
                <div className='comment-uploader-body'>
                    <div>{comment.user}</div>
                    <div>{comment.body}</div>\
                </div>
                {userButton}
            </div>
        );
  }
}

export default CommentIndexItem;
