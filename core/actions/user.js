import 'whatwg-fetch';
import {
  BASE_SERVER_URL,
  GET_GOALS,
  SIGNUP,
  LOGIN
} from '../constants'

// user needs fields for username, firstName, lastName, password
export function signup(user) {
  return function(dispatch, getState) {
    dispatch(requestSignup());
    fetch(`${BASE_SERVER_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })//.then(response=>checkStatus(response))
      //.then(response=>response.json())
      .then(()=>{
        dispatch(receiveSignup(user));
      })
      .catch(()=>{
        // error action
      })
  }
}
export function login(userData) {
  return function(dispatch, getState) {
    dispatch(requestLogin());
    fetch(`${BASE_SERVER_URL}/login?username=${userData.username}&password=${userData.password}`)
      .then(response=>response.json())
      .then((response)=>{
        dispatch(receiveLogin(response))
      });
  }
}
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

const requestSignup = () => {
  return {
    type: SIGNUP,
    status: 'requested'
  }
}
const receiveSignup = (user) => {
  return {
    type: SIGNUP,
    status: 'received',
    user
  }
}

const requestLogin = () => {
  return {
    type: LOGIN,
    status: 'requested'
  }
}

const receiveLogin = (user) => {
  return {
    type: LOGIN,
    status: 'received',
    user
  }
}