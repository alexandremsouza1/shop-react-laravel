import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import './index.css';
import Theme from './config.js'
import Routes from './routes'
import App from './App';
//Redux
import { store } from './store/store'
import { Provider }from 'react-redux'

import reportWebVitals from './reportWebVitals';
const theme = new Theme(createMuiTheme);
ReactDOM.render(
    <Provider store={store}>
    <ThemeProvider theme={theme.getTema()}>
      <Routes />
      <App />
    </ThemeProvider>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
