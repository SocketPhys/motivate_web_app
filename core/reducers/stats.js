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
const defaultState = { moneyOnLine: 0, moneyDonated: 0, moneySecured: 0, goalsCompleted: 0, totalGoals: 0, goalsFailed: 0 };
export default function(state=defaultState, action) {
  switch(action.type) {
    case GET_GOALS:
      if(action.status == 'received') {
        console.log(JSON.stringify(action.goals, null, 2))
        var goals = action.goals;
        var moneyOnLine = 0;
        var moneyDonated = 0;
        var moneySecured = 0;
        var goalsCompleted = 0;
        var goalsFailed = 0;
        goals.forEach(function(goal) {
          if(!goal.finished && Date.now() < goal.deadline) {
            moneyOnLine += parseFloat(goal.money);
          }
          if(goal.finished) {
            goalsCompleted++;
            moneySecured += goal.money;
          }
          if(!goal.finished && goal.deadline < Date.now()) {
            goalsFailed++;
            moneyDonated += goal.money;
          }
        });
        return Object.assign({}, state, {
          moneyOnLine,
          goalsCompleted,
          goalsFailed,
          moneyDonated,
          moneySecured,
          totalGoals: goals.length
        })
      }
    default: return state;
  }
}