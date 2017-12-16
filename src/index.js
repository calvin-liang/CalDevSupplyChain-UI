import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { store } from './util';
import { Provider } from 'react-redux'
import { createStore, applyMiddleWare, compose } from 'redux'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
