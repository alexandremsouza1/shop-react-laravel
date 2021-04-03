import { actiontypes } from '../actions/loading.action' 

const initialState = {
  open:false,
  msg: 'Carregando...'
}

const reducerLoading = (state = initialState, { type, payload }) => {
  switch (type) {

  case actiontypes.CHANGE:
    return { ...state, ...payload }

  default:
    return state
  }
}


export default reducerLoading