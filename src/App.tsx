import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Loading } from './components/Loading/index';

function App() {

  const Listnames = [
    {
      name: 'Khanh',
      age: 30
    },
    {
      name: 'Nguyễn',
      age: 30
    },
    {
      name: 'Nguyễn 1',
      age: 30
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <Loading names={Listnames} />
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
  );
}

export default App;
