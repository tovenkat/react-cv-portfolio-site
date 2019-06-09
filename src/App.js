import React from 'react';
import logo from './assets/images/alex-loian-logo.png';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import Body from './components/Body/Body';


import PageSlider from './components/PageSlider';



function App() {
  return (
    <div className="App">
      
      
      <NavBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Alex Loian
        </h1>
        <h2>
        Front-End Developer
        </h2>
        <h3>
        Java Script, React, NodeJS, Bootstrap, CSS, HTML
        </h3>
        <a
          className="App-link"
          href="https://Loian.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
       Site
        </a>
      </header>
      <Body/>
      
      
      
    </div>
  );
}

export default App;
