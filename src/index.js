import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from './store'
import {persistGate} from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'

let persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <persistGate persistor={persistor}>
        <App /> 
      </persistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
