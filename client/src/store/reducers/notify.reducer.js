import { actiontypes } from '../actions/notify.actions'

const initialState = {
  open: false,
  horizontal: 'center',
  vertical : 'top',
  class: 'success',
  time: 2000,
  msg: ''
}

const notifyReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case actiontypes.CHANGE:
    return { ...state, ...payload }

  default:
    return state
  }
}


export default notifyReducer