// reducers.js

import { combineReducers } from 'redux'
import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS, GET_EVENTS
} from '../actions/actions'

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
function auth(state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false
  }, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: ''
      })
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      })
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      })
    default:
      return state
  }
}

// The quotes reducer
function quotes(state = {}, action) {
  switch (action.type) {

    default:
      return state
  }
}

// The quotes reducer
function events(state = {events:{}}, action) {
  switch (action.type) {

    default:
      return state
  }
}

export function getEvents(state = { events: [] }, action){
  switch (action.type){
      case GET_EVENTS:{
        return Object.assign({},state,{ events: action.events })
      }
      default:{
        console.log("o entro")
        return state

      }
  }
}

// We combine the reducers here so that they
// can be left split apart above
const quotesApp = combineReducers({
  auth,
  getEvents
})

export default quotesApp