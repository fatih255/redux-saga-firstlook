
import { put, takeEvery, delay } from 'redux-saga/effects'

export function* incrementAsync() {
  yield put({ type: 'IS_EVEN_OR_ODD_LOADING' })
  yield delay(3000)
  yield put({ type: 'INCREMENT' })
}
export function* incrementIsEvenOrOdd() {
  yield put({ type: 'IS_EVEN_OR_ODD' })
}
export default function* rootSaga() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
  yield takeEvery(['INCREMENT', 'DECREMENT','INCREMENT_IF_ODD'], incrementIsEvenOrOdd)
}
