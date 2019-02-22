import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";

import postsReducer from './store/reducers/posts';
import * as serviceWorker from './serviceWorker';
import rootSaga from "./store/sagas/posts";
import './index.css';
import App from './App';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(postsReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
))

// run the saga
sagaMiddleware.run(rootSaga);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)


ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
