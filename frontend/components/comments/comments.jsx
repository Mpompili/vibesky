import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';


class CommentForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    let { track } = this.props;
    return (
            <div className='comment-container'>
              <div className='comment-form'>
                <div className='comment-form-user'>
                  <img src={track.imageUrl}/>
                </div>
                <div className='comment-input-container'>
                  <input className='comment-input' type='text' placeholder='Write a Comment'/>
                </div>
              </div>
              <div className='comment-buttons'></div>
            </div>
    )
  }
}

export default CommentForm;
