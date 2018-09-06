// components/Navbar.js

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Login from './Login'
import Logout from './Logout'
import { loginUser, logoutUser, backEventView } from '../redux/actions/actions'

import './../styles/navbar.css'

export default class Navbar extends Component {

  render() {
    const { dispatch, isAuthenticated, errorMessage, eventView } = this.props
    return (
      <nav className='navbar navbar-dark bg-dark'>
        <div className='container-fluid'>
          <h1 className="text-white">
          {Object.entries(eventView).length !== 0 && 
          <button className="btn btn-secondary btn-circle mr-3" onClick={() => dispatch(backEventView())}>
          <i className="fa fa-arrow-circle-left" style={{fontSize: 48}} />
          </button>
          }Events</h1>
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