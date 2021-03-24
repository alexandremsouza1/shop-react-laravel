import React, {Suspense,lazy} from 'react'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'

const login = lazy(()=> import('./login'));

const Routes = () => (
  <Router>
    <Suspense fallback={<div className="d-flex-justify-content-center"><CircularProgress /></div>}>
        <Switch>
          <Route path="/login" component={login} />
          <Route path="/cadastro" component={()=> (<h1>cadastro</h1>) } />
        </Switch>
    </Suspense>
  </Router>
)


export default Routes;