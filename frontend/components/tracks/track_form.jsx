import React from 'react';
import { Link, Redirect } from 'react-router-dom';
//will import track index item
class TrackIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      uploader_id: this.props.currentUser.id,
      imageFile: null,
      imageUrl: null
    }
    this.handleSubmit.bind(this);
  }



  update(type) {
    return e => this.setState({ [type]: e.currentTarget.value })
  }
  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    };
    if (file) {
      console.log("entered if statement");
      debugger
      fileReader.readAsDataURL(file);
      console.log("ending if statement");
    } else {
      this.setState({ imageUrl: '', imageFile: null })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("track[title]", this.state.title);
    formData.append("track[description]", this.state.description);
    if (this.state.imageFile) formData.append("track[image]", this.state.imageFile);
    this.props.createTrack(formData).then(this.props.history.push('/'));
}

  render(){
    return (
      <div className='track-form-container'>
        <form onSubmit={this.handleSubmit} className='track-form'>
          <input type="text" onChange={this.update('title')}/>
          <input type="text" onChange={this.update('description')}/>
          <input type="file" onChange={this.updateFile}/>
          <input className="track-submit" type="submit" value='Upload Track' />
        </form>
      </div>
    )
  }
}

export default TrackIndex;
