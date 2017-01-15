import {
  GET_GOALS,
  ADD_GOAL,
  UPDATE_MONEY
} from "../constants"
/*
  goals: [{
    title: String,
    description: String,
    wager: Number,
    finished: Boolean
  }]
*/
const defaultState = {goals: [], moneyOnLine: 0};
export default function(state = defaultState, action) {
  switch(action.type) {
    case GET_GOALS: 
      if(action.status == 'received')
        return Object.assign({}, state, {goals: action.goals});
      return state;
      break;
    case ADD_GOAL:
      if(action.status == 'received') 
        return state;  // TODO ANYTHING ELSE HERE?
      return state;
    case UPDATE_MONEY:
      return Object.assign({}, state, {
        moneyOnLine: action.money
      })
    default: return state;
  }
}