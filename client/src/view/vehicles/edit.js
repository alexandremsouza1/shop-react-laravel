import React from 'react'
import { store, show } from '../../store/actions/vehicles.action'
import { CircularProgress } from '@material-ui/core'
import Header from '../header'

import { useDispatch, useSelector } from 'react-redux'

export default function VehicleEdit(props) {
  const dispatch = useDispatch()
  const data = useSelector(state => state.vehiclesReducer)
  const [state,setState] = React.useState({
    isLoading:true,
    isLoadingCep:false,
    isDeleted:null,
    redirect:false,
    tips:0,
    confirmEL:null,
    vehicle_id: (props.match.params.id) ? props.match.params.id : null
  })

  React.useEffect(()=> {
    index()
  }, [])

  const index = () => {
    if(state.vehicle_id){
      dispatch(show(state.vehicle_id)).then(res => {
        if(res){
          setState({isLoading:false})
        }
      })
    }else{
      dispatch(store()).then(res => {
        if(res){
          setState({isLoading:false})
        }
      })
    }

  }
  return (
    <div>
        <Header title="Veiculos - gestão"/>
        <div className="container mt-4 pt-3">
          {(state.isLoading) ? <div className="d-flex justify-content-center mt-5 pt-5"><CircularProgress /></div> :
          <div></div>
          }
        </div>
    </div>
  )
}
