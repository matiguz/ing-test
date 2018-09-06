// components/Navbar.js

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Login from './Login'
import Logout from './Logout'
import { loginUser, logoutUser } from '../redux/actions/actions'

export default class Navbar extends Component {

  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props
    debugger;
    return (
      <nav className='navbar navbar-dark bg-dark'>
        <div className='container-fluid'>
          <h1 className="text-white">Events</h1>
          <div className='navbar-form'>

            {!isAuthenticated &&
              <Login
                errorMessage={errorMessage}
                onLoginClick={ creds => dispatch(loginUser(creds)) }
              />
            }

            {isAuthenticated &&
              <Logout onLogoutClick={() => dispatch(logoutUser())} />
            }

          </div>
        </div>
      </nav>
    )
  }

}

Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}