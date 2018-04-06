import React from 'react';
import { Link, Redirect } from 'react-router-dom';
//will import track index item
class TrackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      uploader_id: this.props.currentUser.id,
      imageFile: null,
      imageUrl: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }



  update(type) {
    return e => this.setState({ [type]: e.currentTarget.value })
  }
  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      return this.setState({ imageFile: file, imageUrl: fileReader.result });
    }

    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: 'didnt work', imageFile: null })
    }

  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("track[title]", this.state.title);
    formData.append("track[description]", this.state.description);
    if (this.state.imageFile) formData.append("track[image]", this.state.imageFile);
    this.props.createTrack(formData).then(() => this.props.history.push('/'));
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

export default TrackForm;
