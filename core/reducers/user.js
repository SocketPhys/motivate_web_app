import {
  SIGNUP,
  LOGIN
} from "../constants"
/*
  user: [{
    username: String,
    firstName: String,
    lastName: String,
    password: String
  }]
*/
const defaultState = {username: 'avik', firstName: 'Avik', lastName: 'Jain', 'password':'pass'};
export default function(state = defaultState, action) {
  switch(action.type) {
    case SIGNUP: 
      if(action.status == 'received')
        return action.user;
      // handle signup error
      return state;
      break;
    case LOGIN:
      if(action.status == 'received')
        return action.user;
      return state;
    default: return state;
  }
}