import React from 'react';
import {createRoot} from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import axios from 'axios';
axios.defaults.baseURL = /* process.env.REACT_APP_URL || */ "http://localhost:9000/";
console.log(process.env.REACT_APP_URL)

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
