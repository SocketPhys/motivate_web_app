import 'whatwg-fetch';
import {
  BASE_SERVER_URL,
  GET_GOALS,
  ADD_GOAL,
  UPDATE_MONEY
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

export function updateMoneyOnLine() {
  return function(dispatch, getState) {
    var { goals } = getState();
    var result = 0;
    goals.goals.forEach(function(goal) {
      if(!goal.finished && goal.deadline < Date.now()) {
        result += parseFloat(goal.money);
      }
    });
    dispatch({type: UPDATE_MONEY, money: result})
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