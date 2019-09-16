import React from 'react';
import './App.css';
import { BrowserRouter, Router, Link } from 'react-router-dom';


function home(props) {
  return <h1>Home Component</h1>
}
function about(props) {
  return <h1>About Component</h1>
}
function contact(props) {
  return <h1>Contact Component</h1>
}


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
