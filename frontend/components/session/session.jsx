import React from 'react';
import { Link } from 'react-router-dom';

class sessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit(e){
    e.preventDefault;
    debugger
    // check here if submit form dont work
    this.props.submitForm(Object.assign({}, this.state));

  }

  render(){
    let { path, submitForm  } = this.props

    return(
      <div>
        <form onSubmit={this.handleSubmit} className="session-form-box">
          <h3>{ path }</h3><br/>

          <label>Email:
            <input
              type="text"
              value={this.state.email}
              placeholder="Your email address"
              onChange={this.update('email')}
              className="session-input"
              />
          </label>
          <br/>
          <label>Password:
            <input
              type="password"
              value={this.state.password}
              placeholder="Your Password"
              onChange={this.update('password')}
              className="session-input"
              />
          </label><br/>
          <input className="session-submit" type="submit" value={path} />
        </form>
      </div>
    )
  }
}

export default sessionForm;
