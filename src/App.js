import React from 'react';

import './App.css';
import { BrowserRouter, Router, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
