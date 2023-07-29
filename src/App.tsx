import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ElementalToken, Elements} from './ElementalToken';
import { ElementFlags } from 'typescript';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      <ElementalToken element={Elements.Fire}/>
    </div>
  );
}

export default App;
