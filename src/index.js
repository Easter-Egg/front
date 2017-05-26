import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './Login';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import registerServiceWorker from './registerServiceWorker';
import store from './store/configureStore';
import './index.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

const browserHistory = createHistory();
registerServiceWorker();

const initialState = {
  currentUser: {},
  isAuthenticated: false,
  isLoading: false,
  error: ''
};

ReactDOM.render(
  <Provider store={store(initialState)}>
    <Router history={ browserHistory }>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  </Provider>
  , document.getElementById('root')
);
