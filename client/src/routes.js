import React, {Suspense,lazy} from 'react'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'
import Auth from './view/auth'



const Register = lazy(()=> import('./view/register'));
const vehicles = lazy(()=> import('./vehicles'));

const Routes = () => (
  <Router>
    <Suspense fallback={<div className="d-flex-justify-content-center"><CircularProgress /></div>}>
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route exact path="/login" component={Auth} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/vehicles" component={vehicles} />
          <Route exact path="/cadastro" component={()=> (<h1>cadastro</h1>) } />
        </Switch>
    </Suspense>
  </Router>
)


export default Routes;