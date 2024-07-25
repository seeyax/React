// personal板块下的reducer

const initial = {
  num: 100,
  info: null
}
export default function personalReducer(state = initial, action) {
  state = { ...state }
  switch (action.type) {
    case 'PERSONAL_INFO':
      state.info = {}
      break
    default:
  }

  return state
}