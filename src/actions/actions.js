import * as actionTypes from './actionTypes'
export const increment = (val) => ({ type: actionTypes.INCREMENT, activeSession: val.activeSession })
export const decrement = (val) => ({ type: actionTypes.DECREMENT, activeSession: val.activeSession })
