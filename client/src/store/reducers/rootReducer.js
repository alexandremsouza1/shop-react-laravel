import {combineReducers} from 'redux'
import loadingReducer from './loading.reducer'
import notifyReducer from './notify.reducer'
import alertReducer from './alert.reducer'
import authReducer from './auth.reducer'
import registerReducer from './register.reducer'
import vehiclesReducer from './vehicles.reducer'


const rootReducers = combineReducers({
  loadingReducer,
  notifyReducer,
  alertReducer,
  authReducer,
  registerReducer,
  vehiclesReducer
})

export default rootReducers