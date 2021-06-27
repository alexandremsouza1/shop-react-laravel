import { HttpAuth } from '../../config/Http'
import { changeLoading } from './loading.action'

export const actionTypes = {
  INDEX: 'VEHICLE_INDEX',
  DESTROY:'VEICHLE_DESTROY',
  CHANGE: 'VEICHLE_CHANGE',
  SUCCESS: 'VEICHLE_SUCCESS',
  ERROR: 'VEICHLE_ERROR'
}

export const change = (payload) => ({
  type: actionTypes.CHANGE,
  payload
})

export const success = (payload) => ({
  type: actionTypes.SUCCESS,
  payload
})

export const error = (payload) => ({
  type: actionTypes.ERROR,
  payload
})

export const indexResponse = (payload,isLoadMore) => ({
  type: actionTypes.INDEX,
  payload,
  isLoadMore
})


export const index = (query,isLoadMore) => async dispatch => {
  try {
    const res = await HttpAuth.get('/vehicles?' + new URLSearchParams(query))
    if (typeof res != 'undefined') {
      dispatch(indexResponse(res.data, isLoadMore))
    }
  } catch (err) {
    console.log(err)
  }
}

export const store = () =>  dispatch => {
    return HttpAuth.post('/vehicles')
    .then(res => typeof res != 'undefined' && dispatch(indexResponse(res.data)))
    .catch(err => console.log(err))
}

export const show = (id) => dispatch => {
  return HttpAuth.get('/vehicles/' + id)
            .then(res => {
              if(typeof res != 'undefined'){
                dispatch(indexResponse(res.data))
              }
            })
            .catch(err => {
              console.log(err)
            })
}


export const update = (data) => dispatch => {
  dispatch(changeLoading({
    open:true
  }))
  return HttpAuth.put('/vehicles/' + data.id, data)
            .then(res => {
              dispatch(changeLoading({
                open:false
              }))
              if(typeof res != 'undefined'){
                if(res.data.error){
                  dispatch(success(false))
                  dispatch(error(res.data.error))
                }

                if(res.data.status === 200){
                  dispatch(success(true))
                }
              }
            })
            .catch(err => {
              dispatch(changeLoading({
                open:false
              }))
            })
}

export const destroyResponse = (payload) => ({
  type: actionTypes.DESTROY,
  payload
})

export const destroy = (id) => dispatch => {
  return HttpAuth.delete('/vehicles/'+ id)
        .then(res => {
          if(typeof res != 'undefined') {
            if(res.data.status === 200){
              dispatch(destroyResponse(id));
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
}
