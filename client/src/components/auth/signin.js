import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';
import * as actions from '../../actions';
import $ from 'jquery';

class Signin extends Component {
  handleFormSubmit(e) {
    const email = $("#email").val()
    const password = $("#password").val()
    $.post('http://localhost:3000/login', { email, password })
      .then(function (response) {
        if (response.error)
        console.log('incorrect username or password')
        // show something in the ui
        else {
      console.log(response)
        browserHistory.push('/profile')
      }
    })
    e.preventDefault()
  }

  render(){
    const { fields: {email, password}} = this.props;


    return(

      <form onSubmit={this.handleFormSubmit.bind(this)}>
        <fieldset className="form-group">
          <label className="firstlabel">Email:</label>
          <input id="email" {...email} className="form-control" />
          </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input {...password} id="password" type="password" className="form-control" />
        </fieldset>
        <button action="submit" className="btn btn-primary">Sign In</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, null, actions)(Signin);
