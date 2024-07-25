// vote板块下的reducer

const initial = {
  supNum: 15,
  oppNum: 5,
  num: 0
}
export default function voteReducer(state = initial, action) {
  state = { ...state }
  switch (action.type) {
    case 'VOTE_SUP':
      state.supNum++
      break;
    case 'VOTE_OPP':
      state.oppNum++
      break;
    default:
  }

  return state
}