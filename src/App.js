import React from 'react';

import './App.css';

import PageSlider from './components/PageSlider';


import Tabs from './components/Tabs';
import  Expirience from './components/Expirience/Expirience';




function App() {
  return (
    <div className="App">
       
        <div className="App-header">
        <h1>
          Alex Loian
        </h1>
        <h1 className="App-logo">CV</h1>
        <h2>
        Front-End Developer
        </h2>
        <h5>
        Java Script, React, NodeJS, Bootstrap, CSS, HTML
        </h5>
      
        </div>
      <Expirience/>
      <Tabs/>
      
      
      
    </div>
  );
}

export default App;
