import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux-store/store';
import {Provider} from 'react-redux';
import {HashRouter as Router} from 'react-router-dom';
import App from './components/App';

const root = document.querySelector('#root');
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  root
);

