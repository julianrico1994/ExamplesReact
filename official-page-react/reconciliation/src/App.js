import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoSortByIndex from './components/TodoSort/TodoSortByIndex'
import TodoSortById from './components/TodoSort/TodoSortById'
import KeysChild from './components/KeysChild/KeysChild'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

      </header>
      <div className='App-body'>
        <div className='App-ToDoSort-content'>
          <TodoSortByIndex />
          <TodoSortById />
        </div>
        <KeysChild />
      </div>
    </div>
  );
}

export default App;
