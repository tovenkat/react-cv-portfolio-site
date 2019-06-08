import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Body/>
      <Footer/>
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
        


        
      </header>
    </div>
  );
}

export default App;
