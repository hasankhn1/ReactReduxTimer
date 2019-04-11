import * as constants from '../constants/appConstants'
import * as actionTypes from '../actions/actionTypes'

let initState = {
  seconds: 0,
  minutes: 0,
  hours: 0,
  days: 0
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT: {
      let newState = { ...state };
      if (action.activeSession === constants.SECONDS_SESSION) {
        if (newState.seconds === 60) {
          newState.minutes += 1;
          newState.seconds = 0;
        }
        newState.seconds += 1;
      }
      if (action.activeSession === constants.MINUTES_SESSION) {
        if (newState.minutes === 60) {
          newState.hours += 1;
          newState.minutes = 0
        }
        newState.minutes += 1;
      }
      if (action.activeSession === constants.HOURS_SESSION) {
        if (newState.hours === 24) {
          newState.days += 1;
          newState.hours = 0;
        }
        newState.hours += 1;
      }
      if (action.activeSession === constants.DAYS_SESSION) {
        newState.days += 1;
      }
      return newState;
    }
    case actionTypes.DECREMENT: {
      let newState = { ...state };
      if ((action.activeSession === constants.SECONDS_SESSION && newState.minutes !== 0) || (action.activeSession === constants.SECONDS_SESSION && newState.seconds !== 0)) {
        if (newState.seconds === 1 && newState.minutes !== 0) {
          newState.minutes -= 1;
          newState.seconds = 0;
        } else {
          if (newState.seconds === 0) {
            newState.seconds = 60
          }
          newState.seconds -= 1;
        }
      }
      if ((action.activeSession === constants.MINUTES_SESSION && newState.hours !== 0) || (action.activeSession === constants.MINUTES_SESSION && newState.minutes !== 0)) {
        if ((newState.minutes === 1 && newState.hours !== 0) || (newState.minutes === 0 && newState.hours !== 0)) {
          newState.hours -= 1;
          newState.minutes = 59;
        } else {
          if (newState.minutes === 0) {
            newState.minutes = 60
          }
          newState.minutes -= 1;
        }
      }
      if ((action.activeSession === constants.HOURS_SESSION && newState.days !== 0) || (action.activeSession === constants.HOURS_SESSION && newState.hours !== 0)) {
        if ((newState.hours === 1 && newState.days !== 0) || (newState.hours === 0 && newState.days !== 0)) {
          newState.days -= 1;
          newState.hours = 24;
        } else {
          if (newState.hours === 0) {
            newState.hours = 24
          }
          newState.hours -= 1;
        }
      }
      if (action.activeSession === constants.DAYS_SESSION && newState.days !== 0) {
        newState.days -= 1;
      }
      return newState;
    }
    default: {
      return state
    }
  }
}