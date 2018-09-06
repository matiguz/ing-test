// components/Navbar.js

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AddEventView } from '../redux/actions/actions'

import './../styles/footer.css'

export default class Footer extends Component {

  render() {
    const { dispatch, isAuthenticated} = this.props
    debugger;
    return (
      <footer className="page-footer font-small cyan bg-dark">
        <div className="container text-right">
          <br></br>
          {isAuthenticated && 
          <button className="btn btn-circle btn-secondary mr-3" onClick={() => {dispatch(AddEventView())}}>
          <i className="fa fa-plus-circle" style={{fontSize: 48}} />
            </button>}
        </div>
        <div className="footer-copyright text-center text-white py-3">© 2018 Copyright:
          <span> Ingenious - Test</span>
        </div>
      </footer>
    )
  }

}

Footer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}