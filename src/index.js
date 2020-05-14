import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import 'bulma/css/bulma.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Route, Switch } from "react-router-dom";
import 'antd/dist/antd.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
      <Route path='/' component={App} />
    </Switch>
    </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
