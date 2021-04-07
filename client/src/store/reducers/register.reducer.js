import { actiontypes } from '../actions/register.action'

const initialState = {
    user:{
        'name':'',
        'email':'',
        'password':''
    },
    success: false,
    error : {}
}

const registerReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case actiontypes.CHANGE:
        return { 
            ...state,
            user:{
                ...state.user,
                ...payload
            }
        }
    case actiontypes.SUCCESS:
        return { 
            ...state,
            success: payload
        }
     
    case actiontypes.ERROR:
        return { 
            ...state,
            error: payload
        }     

    default:
        return state
    }
}


export default registerReducer
