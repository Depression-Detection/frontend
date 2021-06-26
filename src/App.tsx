import React from 'react';
import logo from './logo.png';
import './App.css';
import { NavBar } from 'src/components/layout/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <tr>We are currently under development</tr>
        <a href="https://twitter.com/omicron_life">Click here for Updates</a>
      </header>
    </div>
  );
}

export default App;
