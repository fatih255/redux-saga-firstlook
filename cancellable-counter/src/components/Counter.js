import * as React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  INCREMENT, DECREMENT,
  INCREMENT_IF_ODD,
  INCREMENT_ASYNC,
  CANCEL_INCREMENT_ASYNC,
  CANCEL_DECREMENT_ASYNC,
  DECREMENT_ASYNC,
} from '../actionTypes'

function Counter({ counter, countdown, dispatch }) {
  const action = (type, value) => () => dispatch({ type, value })

  return (
    <div>
      Clicked: {counter} times <button onClick={action(INCREMENT)}>+</button>{' '}
      <button onClick={action(DECREMENT)}>-</button>{' '}
      <button onClick={action(INCREMENT_IF_ODD)}>Increment if odd</button>{' '}
      <button
        onClick={countdown.increment ? action(CANCEL_INCREMENT_ASYNC) : action(INCREMENT_ASYNC, 5)}
        style={{ color: countdown.increment ? 'red' : 'black' }}
      >
        {countdown.increment ? `Cancel increment (${countdown.increment})` : 'increment after 5s'}
      </button>

      <button
        onClick={countdown.decrement ? action(CANCEL_DECREMENT_ASYNC) : action(DECREMENT_ASYNC, 5)}
        style={{ color: countdown.decrement ? 'red' : 'black' }}
      >
        {countdown.decrement ? `Cancel decrement (${countdown.decrement})` : 'decrement after 5s'}
      </button>

    </div>
  )
}

Counter.propTypes = {
  // dispatch actions
  dispatch: PropTypes.func.isRequired,
  // state
  counter: PropTypes.number.isRequired,
  countdown: PropTypes.number.isRequired,
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
    countdown: state.countdown,
  }
}

export default connect(mapStateToProps)(Counter)
