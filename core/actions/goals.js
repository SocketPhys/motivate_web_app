import 'whatwg-fetch';
import {
  BASE_SERVER_URL,
  GET_GOALS,
  ADD_GOAL,
  COMPLETE_GOAL,
  UPDATE_MONEY,
  UPDATE_COUNTDOWN
} from '../constants'
export function getGoals() {
  return function(dispatch, getState) {
    dispatch(requestGoals());
    const { user } = getState();
    fetch(`${BASE_SERVER_URL}/goals?username=${user.username}`)
      .then(response => response.json())
      .then((json)=>{
        console.log(json);
        dispatch(receiveGoals(json));
        dispatch(updateCountdowns());
      });
  }
}

// goal needs fields for title and deadline
export function addGoal(goal) {
  return function(dispatch, getState) {
    dispatch(requestAddGoal());
    const user = getState().user;
    fetch(`${BASE_SERVER_URL}/add_goal`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: user.username,
        password: user.password,
        goal
      })
    }).then(()=>{
      dispatch(receiveAddGoal());
      dispatch(getGoals()); // IS THIS BAD TODO
    })
  }
}

export function completeGoal(goalId) {
  return function(dispatch, getState) {
    dispatch(requestCompleteGoal());
    const user = getState().user;
    fetch(`${BASE_SERVER_URL}/complete_goal`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: user.username,
        password: user.password,
        goalId
      })
    })
      .then(()=>{
        dispatch(receiveCompleteGoal());
        dispatch(getGoals());
      })
  }
}
export function updateCountdowns() {
  return {
    type: UPDATE_COUNTDOWN
  }
}
const receiveGoals = (goals) => {
  return {
    type: GET_GOALS,
    status: 'received',
    goals
  }
}

const requestGoals = () => {
  return {
    type: GET_GOALS,
    status: 'requested'
  }
}

const requestAddGoal = () => {
  return {
    type: ADD_GOAL,
    status: 'requested'
  }
}

const receiveAddGoal = () => {
  return {
    type: ADD_GOAL,
    status: 'received'
  }
}

const requestCompleteGoal = () => {
  return {
    type: COMPLETE_GOAL,
    status: 'requested'
  }
}

const receiveCompleteGoal = () => {
  return {
    type: COMPLETE_GOAL,
    status: 'received'
  }
}