// containers/App.js

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { loginUser, fetchQuote, fetchSecretQuote } from '../redux/actions/actions'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
import EventCard from '../components/EventCard'
import EventForm from '../components/EventForm'
import { getEvents } from '../redux/actions/actions';
import EventView from '../components/EventView';
import { debug } from 'util';


//import Quotes from '../components/Quotes'

class App extends Component {


  componentWillMount() {
    // super();
    this.props.dispatch(getEvents());
    //  this.setState(this.props.dispatch.getEvents());
  }

  render() {
    const { dispatch, events, isAuthenticated, errorMessage, eventView, isSecretQuote } = this.props
    console.log(this.props, "LA CONCHA DE TU MADRE");
    return (
      <div>
        <Navbar
          isAuthenticated={isAuthenticated}
          errorMessage={errorMessage}
          dispatch={dispatch}
        />
        <div className='container'>
          {Object.entries(eventView).length !== 0 ?
              <EventView
                event={eventView}
                dispatch={dispatch}
              /> : <div>
                <EventForm
                  isAuthenticated={isAuthenticated}
                  errorMessage={errorMessage}
                  dispatch={dispatch}
                />
                  {events.map((event) => (
                  <EventCard event={event}
                    dispatch={dispatch} />
                ))}
                </div>
          }
        </div>
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  quote: PropTypes.string,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  isSecretQuote: PropTypes.bool.isRequired
}

// These props come from the application's
// state when it is started
function mapStateToProps(state) {

  const { events, auth } = state
  const { isAuthenticated, errorMessage } = auth
  return {
    events: events.events,
    eventView: events.eventView,
    isAuthenticated,
    errorMessage,
  }
}

export default connect(mapStateToProps)(App)