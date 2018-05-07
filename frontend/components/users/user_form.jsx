import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state = this.props.user;
    this.state = {
        imageFile: null, 
        imageUrl: null, 
    }; 
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.setProfPic = this.setProfPic.bind(this); 
  }

  update(type) {
    return e => this.setState({ [type]: e.currentTarget.value });
  }

//   componentWillMount(){
//       this.props.fetchUser(this.props.match.params.id); 
//     //   this.state = this.props.user; 
//     //   debugger;
//     // this.setState({
//     //     this.props.user;  
//     // });
//       console.warn('this is state after component Did mount', this.state); 
//   }

//   componentDidMount(){

//   }


  updateFile(type, e) {
    const typeFile = type.concat('File');
    const typeUrl = type.concat('Url');
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    console.log('this is state before upload', this.state);
    fileReader.onloadend = () => {
      return this.setState({ [typeFile]: file, [typeUrl]: fileReader.result });
    };
    console.log('this is state after upload', this.state);
    file ? fileReader.readAsDataURL(file) :
      this.setState({ [typeUrl]: 'didnt work', [typeFile]: null });
  }


  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    // formData.append("track[title]", this.state.title);
    // formData.append("track[description]", this.state.description);
    if (this.state.imageFile) {
        formData.append("user[image]", this.state.imageFile);
    }
    debugger; 
    this.props.updateUser(formData, this.props.user.id);
    debugger; 
    // .then(() => this.props.history.push(`/users/${this.props.user.id}`));
  }

  generalDetailForm(editPic) {
  
     
    return (
    <div className="detail-submit">
      <div className='ds-image-box'>
        <img src={editPic}/>
        <label className='imageLabel'>Upload Image
          <input className="h-input" type="file" onChange={(e) => this.updateFile('image', e)}/>
        </label>
      </div>

      <div className='track-detail-form'>
        <p className='tdf-text tdf-required'>Title</p>
        {/* <input className='txt-input'type="text" onChange={this.update('title')} value={this.state.title}/> */}
        <p className='tdf-text'>Description</p>
        {/* <textarea className='txt-input txta active-ring' onChange={this.update('description')} value={this.state.description}></textarea> */}
        <input className="inputLabel" type="submit" value={`${this.props.formType}`} />
      </div>
    </div>);
  }

  componentWillMount(){
      this.props.fetchUser(this.props.match.params.id); 
    //   debugger; 
      this.setState({
          imageUrl: this.props.user.imageUrl
      });
  }
  setProfPic(){
      if (this.props.user) {
          return this.state.imageUrl; 
      } else {
          return ''; 
      }
  }
  render(){
  let detailSubmit, upload_container;
//   let editPic = (this.props.user === null) ? '' : this.state.imageUrl;
//   debugger;
    let editPic = this.setProfPic(); 
    // editPic = (this.state.imageUrl === undefined) ? '' : this.state.imageUrl; 

    // (this.state.user === undefined) ? ' ' : console.log(this.props.user);

//   if (this.state.audioUrl === null) {
//     upload_container = 'audio-upload-container';
//     detailSubmit = '';
//   } else {
//     upload_container = 'audio-upload-container auc-special';
    detailSubmit = this.generalDetailForm(editPic);
//   }

    return (
      <div className='track-form-container'>
        <form onSubmit={this.handleSubmit} className='track-form'>
          {/* <div className={upload_container}>
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
