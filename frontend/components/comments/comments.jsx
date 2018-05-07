import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

// .then(() => this.props.history.push('/tracks'))
class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append("comment[body]", this.state.body);
    this.props.createComment(formData, this.props.track.id);
    this.setState({body:''}); 
  }

  updateBody() {
    return e => this.setState({ body: e.currentTarget.value });
  }

  render(){
    let { track, currentUser } = this.props;
    return (
            <div className='comment-container'>
              <div className='comment-form'>
                <form onSubmit={this.handleSubmit} className='cform'> 
                  <div className='comment-form-user'>
                    <img src={currentUser.imageUrl}/>
                  </div>
                  <div className='comment-input-container'>
                    <input className='comment-input' type='text' onChange={this.updateBody()} value={this.state.body} placeholder='Write a Comment'/>
                  </div>
                  <input type='submit' className='h-input'/>              
                </form> 
              </div>
              <div className='comment-buttons'></div>
            </div>
    );
  }
}

export default withRouter(CommentForm);
