import { Http } from '../../config/Http'
import { changeLoading } from './loading.action'
import { changeNotify } from './notify.actions'

export const actiontypes = {
    CHANGE: 'REGISTER_CHANGE',
    ERROR: 'REGISTER_ERROR',
    SUCCESS: 'REGISTER_SUCCESS'
}

export const change = (payload) => ({
    type: actiontypes.CHANGE,
    payload
})

export const errors = (payload) => ({
    type: actiontypes.ERROR,
    payload
})

export const success = (payload) => ({
    type: actiontypes.SUCCESS,
    payload
})


export const setUserToken = token => dispatch => {
    localStorage.setItem('access_token',token);
    dispatch(change({
        name:'',
        email:'',
        password:''
    }))
    dispatch(success(true))
  }

export const register = data => dispatch => {
    dispatch(changeLoading({open:true,msg:'Cadastrando usuario...'}))
    return Http.post('/register',data)
            .then(res => {
                dispatch(changeLoading({open:false}))
                if(res.hasOwnProperty('data')){
                    if(res.data.access_token){
                        dispatch(changeNotify({
                            open:true,
                            class:'success',
                            msg:'Usuario cadastrado com sucesso'
                        }))

                        dispatch(setUserToken(res.data.access_token))
                    }
                }
            })
            .catch(error => {
                dispatch(changeLoading({open:false}))
                if(error.response){
                    dispatch(errors(error.response.data.errors))
                }
            })
}