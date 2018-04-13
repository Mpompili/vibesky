import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import SplashContainer from '../splash/splash_container';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};



class sessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      modalIsOpen: true,
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentWillMount(){
    Modal.setAppElement(document.getElementById('root'));
  }

  openModal() {
     this.setState({modalIsOpen: true});
   }

   afterOpenModal() {
     // references are now sync'd and can be accessed.
   }

   closeModal() {
     this.setState({modalIsOpen: false});
     this.props.clearErrors();
     this.props.history.push("/home");
   }

  update(field){
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e){
    e.preventDefault();
    let user = Object.assign({},
      {email: this.state.email, password: this.state.password});
    this.props.submitForm(user).then(this.props.fetchTracks());
  }

  handleDemo(e){
    e.preventDefault();
    this.props.demoSumit({email: 'demouser', password: 'password'});
  }

  render(){
    let { path, submitForm, errors } = this.props;
    let message = path === 'home/signup' ?
      <h1>Create your <span className="titlespacing">VIBESKY</span> account</h1> : <h1>Log in</h1>;

    let styledErrors = errors.map(err => <li>{err}</li>);
    let inputStyle = styledErrors[0] !== undefined ?
      'session-input error' : 'session-input';


    return(
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
         onAfterOpen={this.afterOpenModal}
         onRequestClose={this.closeModal}
         style={customStyles}
         contentLabel="Example Modal"
       >
        <form onSubmit={this.handleSubmit} className="session-form-box">
            {message}
            <p id="session-error-message">{styledErrors}</p>
            <input
              type="text"
              value={this.state.email}
              placeholder="Your email address"
              onChange={this.update('email')}
              className={inputStyle}
              />
          <br/>
            <input
              type="password"
              value={this.state.password}
              placeholder="Your Password"
              onChange={this.update('password')}
              className={inputStyle}
              />
            <br/>
          <input className="session-submit" type="submit" value='Continue' />
          <br/><br/>
          <p className="session-text">We may use your email for updates
            and tips on VIBESKY's products and services. You can unsubscribe
            for free at any time in your notification preferences.</p>
          <p className="session-text stcenter">By signing in, you agree to our
            <a target="_blank" href="www.google.com"> Terms of Use</a>
          </p><br/>
        <button className="session-submit demo-submit" onClick={this.handleDemo}>Demo Login</button>
        </form>
      </Modal>
      </div>
    );
  }
}

export default sessionForm;
