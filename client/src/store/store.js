import { createStore,applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import rootReducers from './reducers/rootReducer'

let middleware = [ReduxThunk]

export const store = createStore(rootReducers,applyMiddleware(...middleware));
