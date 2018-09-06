// components/Login.js

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Login extends Component {

  render() {
    const { errorMessage } = this.props

    return (
      <div>
          <div className="float-left ml-3 mt-3 pb-3">
            <input type='text' ref='username' className="form-control" styles="" placeholder='Username'/>
          </div>
          <div className="float-left ml-3 mt-3 pb-3">
            <input type='password' ref='password' className="form-control" styles="" placeholder='Password'/>
            </div>
          <div className="float-left ml-3 mt-3 pb-3">
            <button onClick={(event) => this.handleClick(event)} className="btn btn-secondary">
              Login
            </button>
          </div>        

        {errorMessage &&
          <p className="text-white">{errorMessage}</p>
        }
      </div>
    )
  }

  handleClick(event) {
    const username = this.refs.username
    const password = this.refs.password
    const creds = { username: username.value.trim(), password: password.value.trim() }
    this.props.onLoginClick(creds)
  }
}

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}