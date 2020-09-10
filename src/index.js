import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import RepoApp from './components/RepoApp';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <RepoApp />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
