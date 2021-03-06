import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { store } from './redux/store'
import { Provider } from 'react-redux' 


import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/boxicons-2.1.1/css/boxicons.min.css'
import './sass/index.scss'

import Layout from './components/Layout'

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <Layout />
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);


reportWebVitals();
