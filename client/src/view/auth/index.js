import React from 'react'
import { Redirect,Link } from 'react-router-dom'
import { change,login } from '../../store/actions/auth.action'
import { Typography,TextField,Button } from '@material-ui/core'
import { useSelector,useDispatch} from 'react-redux'
import  RegisterButton  from '../register/RegisterButton'

export default function Auth() {
  const dispatch = useDispatch();
  const {credentials,success} = useSelector(state=>state.authReducer)
  return (
    <div className="d-flex bg-white min-vh-100">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="form-group text-center">
              <img src="/logo.png" alt="CAR CRM" height="48" />
              <Typography className="mt-3" variant="h6" component="h1">Plataform de revenda de veiculos </Typography>
            </div>
            <TextField
              fullWidth
              variant="outlined"
              label="Email"
              type="email"
              margin="normal"
              autoComplete="email"
              value={credentials.email}
              onChange={text => dispatch(change({email:text.target.value}))}
            />

            <TextField
              fullWidth
              variant="outlined"
              label="Senha"
              type="password"
              margin="normal"
              value={credentials.password}
              onChange={text => dispatch(change({password:text.target.value}))}
            />

            <Button 
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              className="mt-4 mb-4"
              onClick={()=> dispatch(login(credentials))}
              >Entrar
            </Button>

            <RegisterButton
              component={Link}
              to="/register"
              variant="contained"
              fullWidth
              size="large"
            >
              Cadastrar
            </RegisterButton>


            {(success) && 
              <Redirect to="/login" />
            }
          </div>
        </div>
      </div>
    </div>
  )
}
