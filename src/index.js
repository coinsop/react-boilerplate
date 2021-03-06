import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const initialState = {
  // TODO: add only reducers attributes
};

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
