import React from 'react';
// import ReactDOM from 'react-dom';
import {Button} from '@material-ui/core';

const App = () => {
  return (
     <>
     <h4>Aplicação React</h4>
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