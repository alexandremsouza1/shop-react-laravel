import { actiontypes } from '../actions/alert.action'

const initialState = {
  open: false,
  class: 'success',
  time: 3000,
  msg: 'Dados atualizados'
}

const alertLoading = (state = initialState, { type, payload }) => {
  switch (type) {

  case actiontypes.CHANGE:
    return { ...state, ...payload }

  default:
    return state
  }
}

export default alertLoading