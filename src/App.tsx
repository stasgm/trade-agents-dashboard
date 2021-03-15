import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Title from './Title';
import { Provider } from 'react-redux'
// import { Store } from 'redux'
import { configureStore } from './store/store';
import List from './List';

function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <List />
    </Provider>
  );
}

export default App;



/*   return (
    <div className="App">
      <header className="App-header">
        <Title>Dashboard</Title>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ); */