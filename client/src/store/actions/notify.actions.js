export const actiontypes = {
  CHANGE: 'CHANGE_NOTIFY'
}

export const changeNotify = (payload) => ({
  type: actiontypes.CHANGE,
  payload
})