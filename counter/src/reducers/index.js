
const initialCounterState = {
  number: 0,
  info: 'CURRENT NUMBER IS ZERO',
}
export default function counter({ number, info } = initialCounterState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { number: number + 1 }
    case 'INCREMENT_IF_ODD':
      return { number: (number % 2 !== 0) ? number + 1 : number }
    case 'DECREMENT':
      return { number: number - 1 }
    case 'IS_EVEN_OR_ODD':
      return { number, info: (number % 2 === 0) ? 'NUMBER IS EVEN' : 'NUMBER IS ODD' }
    case 'IS_EVEN_OR_ODD_LOADING':
      return { number, info: 'LOADING...' }
    default:
      return { number, info }
  }
}
