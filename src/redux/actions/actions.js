// actions.js
import axios from 'axios';

// There are three possible states for our login
// process and we need actions for each of them
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

// Three possible states for our logout process as well.
// Since we are using JWTs, we just need to remove the token
// from localStorage. These actions are more useful if we
// were calling the API to log the user out
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

export const GET_EVENTS = 'GET_EVENTS'
export const GET_EVENT_VIEW  = 'GET_EVENT_VIEW'
export const BACK_EVENT_VIEW  = 'BACK_EVENT_VIEW'
export const ADD_EVENT  = 'ADD_EVENT'
export const ADD_EVENT_VIEW  = 'ADD_EVENT_VIEW'

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token
  }
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

// Calls the API to get a token and
// dispatches actions along the way
export function loginUser(creds) {

  let config = {
    method: 'POST',
    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
    body: `username=${creds.username}&password=${creds.password}`
  }

  return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return fetch('http://localhost:3001/sessions/create', config)
      .then(response =>
        response.json().then(user => ({ user, response }))
            ).then(({ user, response }) =>  {
        if (!response.ok) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(loginError(user.message))
          return Promise.reject(user)
        } else {
          // If login was successful, set the token in local storage
          localStorage.setItem('id_token', user.id_token)
          localStorage.setItem('access_token', user.access_token)
          // Dispatch the success action
          dispatch(receiveLogin(user))
        }
      }).catch(err => {
        console.log("Error: ", err)
    })
  }
}

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  }
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
}

// Logs the user out
export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('id_token')
    localStorage.removeItem('access_token')
    dispatch(receiveLogout())
  }
}

export function getEvents() {
    
  return dispatch => {
      axios.get('http://localhost:3001/events').then((response) => {
        dispatch( { type: GET_EVENTS, events: response.data})
      })
  }

}

export function getEventView(id) {
    
  return dispatch => {
      let req = {'id':id};
      axios.post('http://localhost:3001/events/find',req).then((response) => {
          dispatch( { type: GET_EVENT_VIEW, event: response.data})
      })
  }

}

export function addEvent (state) {
  return (dispatch) => {
      debugger;
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('id_token');
        axios.post('http://localhost:3001/events/add',state).then(() => {
          console.log("event add");
          dispatch( { type: ADD_EVENT })

        })
     //alert("puto el que lee");
  }
}

export function backEventView() {
    
  return dispatch => {
    dispatch( { type: BACK_EVENT_VIEW })
  }

}

export function AddEventView() {
  return dispatch => {
    dispatch( { type: ADD_EVENT_VIEW })
  }

}