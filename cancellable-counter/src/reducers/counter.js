import {
  INCREMENT,
  DECREMENT,
  INCREMENT_IF_ODD,
  INCREMENT_ASYNC,
  CANCEL_INCREMENT_ASYNC,
  CANCEL_DECREMENT_ASYNC,
  COUNTDOWN_TERMINATED,
  DECREMENT_ASYNC,
} from '../actionTypes'

export function countdown(state = { decrement: 0, increment: 0 }, action) {
  switch (action.type) {
    case INCREMENT_ASYNC:
      return {...state ,increment: action.value }
    case DECREMENT_ASYNC:
      return {...state ,decrement: action.value }
    case COUNTDOWN_TERMINATED:
    case CANCEL_INCREMENT_ASYNC:
    case CANCEL_DECREMENT_ASYNC:
      return 0
    default:
      return state
  }
}

export function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    case INCREMENT_IF_ODD:
      return state % 2 ? state + 1 : state
    default:
      return state
  }
}
