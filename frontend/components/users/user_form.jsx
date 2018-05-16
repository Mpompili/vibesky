import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = '';
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
        this.setState(nextProps.user);
        if (this.props.user && this.props.user.id != nextProps.match.params.id) {
        
        this.props.fetchUser(nextProps.match.params.id);
        }
    }
}

  update(type) {
    return e => this.setState({ [type]: e.currentTarget.value });
  }

  updateFile(type, e) {
    const typeFile = type.concat('File');
    const typeUrl = type.concat('Url');
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      return this.setState({ [typeFile]: file, [typeUrl]: fileReader.result });
    };
    file ? fileReader.readAsDataURL(file) :
      this.setState({ [typeUrl]: 'didnt work', [typeFile]: null });
  }


  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user[username]", this.state.username);
    formData.append("user[location]", this.state.location);
    formData.append("user[about]", this.state.about);
    if (this.state.imageFile) formData.append("user[image]", this.state.imageFile);
    this.props.updateUser(formData, this.props.user.id).then(() => this.props.history.push(`/users/${this.props.user.id}`));
  }

  generalDetailForm() {
    return (
    <div className="detail-submit">
      <div className='ds-image-box'>
        <img src={this.state.imageUrl}/>
        <label className='imageLabel'>Upload Image
          <input className="h-input" type="file" onChange={(e) => this.updateFile('image', e)}/>
        </label>
      </div>

      <div className='track-detail-form'>
        <p className='tdf-text'>username</p>
        <input className='txt-input' type="text" onChange={this.update('username')} value={this.state.username || this.state.email } placeholder={'what username you want?'}/>
        <p className='tdf-text extraspace-f'>location</p>
        <input className='txt-input' type="text" onChange={this.update('location')} value={this.state.location || 'vibesphere, Earth'} placeholder={'where ya from?'}/>
        <p className='tdf-text extraspace-f'>about</p>
        <textarea className='txt-input txta active-ring' onChange={this.update('about')} value={this.state.about} placeholder={'tell us about yourself'}></textarea>
        <input className="inputLabel extraspace-f" type="submit" value={`${this.props.formType}`} />
      </div>
    </div>);
  }

  render(){
  let detailSubmit, upload_container;

  if (!this.props.user) return (<div></div>); 
  if (this.props.user.id != this.props.currentUser.id) {
  return <Redirect to="/tracks"/>;
  }
//   if (this.state.audioUrl === null) {
//     upload_container = 'audio-upload-container';
//     detailSubmit = '';
//   } else {
//     upload_container = 'audio-upload-container auc-special';
    detailSubmit = this.generalDetailForm();
//   }

    return (
      <div className='track-form-container'>
        <form onSubmit={this.handleSubmit} className='track-form'>
          {/* <div classNgame={upload_container}>
            <h1>Upload to VIBESKY</h1>
            <label className='inputLabel il-main active-ring'>Choose a file to upload
              <input className="h-input" type="file" onChange={(e) => this.updateFile('audio', e)}/>
            </label>
          </div> */}
          {detailSubmit}
        </form>
      </div>
    )
  }
}

export default withRouter(UserForm);

// let detailSubmit, upload_container;
//
// if (this.state.audioFile === null) {
//   upload_container = 'audio-upload-container';
//   detailSubmit = '';
// } else {
//   upload_container = 'audio-upload-container auc-special';
//   detailSubmit = this.generalDetailForm();
// }
