import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();


/** 
 * @description Asi lo propone el tutorial de este ejemplo, que se encuentra en la pagina:
 * {@link https://redux.js.org/basics/exampletodolist#components-todo-js}
 */

/* 
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'
​
const store = createStore(rootReducer)
​
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
 */