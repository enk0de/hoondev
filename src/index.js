import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Firebase from 'firebase';
import rootReducer from './modules';
import ReduxThunk from 'redux-thunk';

const firebaseConfig = {
  apiKey: 'AIzaSyBO86R_-tKRPVboQPOzjXShV9boiBHFzj0',
  authDomain: 'hoondev-f55fa.firebaseapp.com',
  databaseURL: 'https://hoondev-f55fa.firebaseio.com',
  projectId: 'hoondev-f55fa',
  storageBucket: 'hoondev-f55fa.appspot.com',
  messagingSenderId: '925023299184',
  appId: '1:925023299184:web:3ded72fb89aabf89b636b5',
  measurementId: 'G-RKPCH35RPY',
};
// Initialize Firebase
Firebase.initializeApp(firebaseConfig);
Firebase.analytics().logEvent('A user entered the site.');

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
