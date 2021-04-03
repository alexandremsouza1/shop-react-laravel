import { Http } from '../../config/Http'
import { changeLoading } from './loading.action'
import { changeNotify } from './notify.actions'


export const actionTypes = {
  CHANGE: 'AUTH_CHANGE',
  SUCCESS: 'AUTH_SUCCESS'
}

export const change = (payload) => ({
  type: actionTypes.CHANGE,
  payload
})


export const success = (payload) => ({
  type: actionTypes.SUCCESS,
  payload
})

export const setUserToken = token => dispatch => {
  localStorage.setItem('access_token',token);
  dispatch(change({email:'',password:''}))
  dispatch(success(true))
}




export const login = credential => dispatch => {
  dispatch(changeLoading(({open:true,msg:'Autenticando o usuario'})))
  return Http.post('oauth/token',{
    grant_type:'password',
    client_id:2,
    client_secret:'DT7eHwxr7Yir11iuajkzL9W4DQszDxY2CabxK8qX',
    username:credential.email,
    password:credential.password,
    scope: ''
  }).then(res => {
    if(typeof res !== 'undefined'){
      if(res.data.access_token){
        dispatch(setUserToken(res.data.access_token))
      }
    }
  })
    .catch(error => {
      if(error.hasOwnProperty('response')){
        let num = error.response.status.toString()
        if(num[0] === '4'){
          dispatch(changeNotify({open:true,class:'error',msg:error.response.data.message}))
        }
      }
    })
    .then(() => {
    // always executed
    dispatch(changeLoading(({open:false})))
})
}

