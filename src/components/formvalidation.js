import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import './Form.css';

class FormValid extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      formErrors: {name: '',email: '', password: ''},
      nameValid: false,
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let nameValid = this.state.nameValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'name':
            nameValid = value.length >= 6;
            fieldValidationErrors.name = nameValid ? '' : ' is invalid';
            break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    nameValid:nameValid,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.nameValid &&this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  handleSubmit(e){
    e.preventDefault();
    const data = new FormData(e.target);

    console.log(data.get("name")); // reference by form input's `name` tag
    console.log(data.get("email")); // reference by form input's `name` tag
    console.log(data.get("password")); // reference by form input's `name` tag
    console.log(JSON.stringify(data)); // reference by form input's `name` tag
 }

  render () {
    return (
      <form className="demoForm" onSubmit={(x)=>this.handleSubmit(x)}>
        <h2>Sign up</h2>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.name)}`}>
          <label htmlFor="name">Name address</label>
          <input type="name" required className="form-control" name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email">Email address</label>
          <input type="email" required className="form-control" name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleUserInput}  />
        </div>
        <button  className="btn btn-primary" disabled={!this.state.formValid}>Sign up</button>
      </form>
    )
  }

}

export default FormValid;