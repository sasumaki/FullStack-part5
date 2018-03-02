const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  let newState
  let val
  switch (action.type) {
    case 'GOOD':
      val = state.good + 1
      newState = { ...state, good: val }
      return newState
    case 'OK':
      val = state.ok + 1
      newState = { ...state, ok: val }
      return newState
    case 'BAD':
      val = state.bad + 1
      newState = { ...state, bad: val }
      return newState
    case 'ZERO':
      return 0
    default:
      return state
  }
}

export default counterReducer
