import React from 'react';

import './App.css';
import HelloWorld from "./Componets/Hello World";



const HelloWorldH1 = () =>
{
  return (<h1>
    Hello World
  </h1>)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld></HelloWorld>
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
  );
}

export default App;
