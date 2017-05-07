import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';

import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
export const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <App />
    </Provider>,
  document.getElementById('root')
);
