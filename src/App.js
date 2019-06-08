import React from 'react';
import logo from './logo.svg';
import './App.css';
import SiteWrapper from './containers/SiteWrapper/SiteWrapper';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          This Site is Under Construction.
        </h1>
        <a
          className="App-link"
          href="https://Loian.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
       Alex Loian Site
        </a>
        <SiteWrapper/>
      </header>
    </div>
  );
}

export default App;
