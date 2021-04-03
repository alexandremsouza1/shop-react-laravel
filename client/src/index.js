import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Theme from './config.js'
import Routes from './routes'
import { Loading,Notify,Alert,Confirm } from './view/components'
//Redux
import { store } from './store/store'
import { Provider }from 'react-redux'

import reportWebVitals from './reportWebVitals';
const theme = new Theme(createMuiTheme);
ReactDOM.render(
    <Provider store={store}>
    <ThemeProvider theme={theme.getTema()}>
      <Loading />
      <Notify />
      <Alert />
      <Confirm />
      <Routes />
    </ThemeProvider>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
