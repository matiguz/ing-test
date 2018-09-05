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
// import Paginator from "react-paginator";
// import Pagination from 'react-paginating';
import Pagination from "react-js-pagination";
import { debug } from 'util';

class App extends Component {

  constructor(){
    super();
    this.state = {
      activePage: 1,
      eventsPerPage:6,
      total: 0
    };
    this.handlePageChange = this.handlePageChange.bind(this)
  }
 
  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
  }

  componentWillMount() {
    // super();
    this.props.dispatch(getEvents());
    const { events } = this.props;
    this.setState({total : events.length})
  }

  render() {
    const { dispatch, events, isAuthenticated, errorMessage, eventView, isSecretQuote } = this.props
    console.log(events.length);
  //  this.setState({total : events.length})
    console.log(this.state);
    let cant = this.props.events.length;
    debugger;
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
                  dispatch={dispatch}
                /><div className="container">
                <div className="row">
                    {events.map((event,key) => {
                      if ((this.state.eventsPerPage * this.state.activePage - this.state.eventsPerPage -1 < key) &&
                          (this.state.eventsPerPage * this.state.activePage > key)) {
                            return <EventCard event={event}
                                            dispatch={dispatch} />
                        }
                   } )
                   
                   }
                  </div>
                  </div>
                  { <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={this.state.eventsPerPage}
                    totalItemsCount={cant}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                          /> }
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