import moment from 'moment';
const initState = {
  timer: moment().format('ss')
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'INCREMENT_TIMER': {
      const newState = { ...state };
      if (newState.timer === 60) {
        initState.timer = 0;
        newState.timer = 0;
      }
      newState.timer = parseInt(newState.timer) + 1;
      return newState
    }
    case 'DECREMENT_TIMER': {
      const newState = { ...state };
      if (newState.timer === 0) {
        initState.timer = 61;
        newState.timer = 61;
      }
      newState.timer = parseInt(newState.timer) - 1;
      return newState;
    }
    default: {
      return state
    }
  }
}