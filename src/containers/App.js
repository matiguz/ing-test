// containers/App.js

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { loginUser, fetchQuote, fetchSecretQuote } from '../redux/actions/actions'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
import EventCard from  '../components/EventCard'
import EventForm from  '../components/EventForm'
import { getEvents } from '../redux/actions/actions';


//import Quotes from '../components/Quotes'

class App extends Component {

/*
  componentWillMount(){
   // super();
    this.props.dispatch(getEvents());
    //this.setState(this.props.getEvents());
  }*/

  render() {
    const { dispatch, events, isAuthenticated, errorMessage, isSecretQuote } = this.props
    console.log(this.props, "LA CONCHA DE TU MADRE");
    
    return (
      <div>
        <Navbar
          isAuthenticated={isAuthenticated}
          errorMessage={errorMessage}
          dispatch={dispatch}
        />
        <div className='container'>
    {
      events.map((event) => (
                        <EventCard event={event}/>
                    ))}

        <EventForm 
          isAuthenticated={isAuthenticated}
          errorMessage={errorMessage}
          dispatch={dispatch}
        />
        <EventCard
            title="titlssse"
        />
        <EventCard
            title="titlssse"
        />
    {/*}      <Quotes
            onQuoteClick={() => dispatch(fetchQuote())}
            onSecretQuoteClick={() => dispatch(fetchSecretQuote())}
            isAuthenticated={isAuthenticated}
            quote={quote}
            isSecretQuote={isSecretQuote}
    />*/}
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

  const { getEvents, auth } = state
  const { isAuthenticated, errorMessage } = auth
  return {
    events:getEvents.events,
    isAuthenticated,
    errorMessage,
  }
}

export default connect(mapStateToProps)(App)