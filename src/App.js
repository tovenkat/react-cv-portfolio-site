import React from 'react';
import './App.css';
import ReactGA from 'react-ga';
import Drawer from './components/Drawer';
import ParalaxL from './components/Parallax';


ReactGA.initialize('UA-134625728-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div className="App">
     
      <Drawer/>
      <ParalaxL/>

      
    </div>
  );
}

export default App;
