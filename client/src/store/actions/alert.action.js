export const actiontypes = {
  CHANGE: 'CHANGE_ALERT'
}

export const changeAlert = (payload) => ({
  type: actiontypes.CHANGE,
  payload
})