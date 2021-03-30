import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdPayment } from 'react-icons/md'
import { Button,TextField } from '@material-ui/core';
import { Loading,Notify,Alert } from './view/components'
const App = () => {
  return (
     <>
     <Alert />
     <h4 className="text-danger">Aplicação React</h4>
     <MdPayment />
     <TextField />
     <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
     </>
  );
}

export default App;