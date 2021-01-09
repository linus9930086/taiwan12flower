import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <HashRouter>
    <Switch>
      {/* <Route path={process.env.PUBLIC_URL + '/a'} component={App} /> */}
      <App />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);
reportWebVitals();
