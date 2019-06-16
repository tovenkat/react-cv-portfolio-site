import React from 'react';
import './App.css';
import ReactGA from 'react-ga';
import Drawer from './components/Drawer';
import ParalaxL from './components/Parallax';
import {Route} from 'react-router-dom';

import ExperienceTabs from './components/ExperienceTabs';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import Pet from './components/PetProject/PetProject';



ReactGA.initialize('UA-134625728-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div className="App">
     <Route component={Drawer}/>
     <Route path="/" exact component={ParalaxL}/>
     <Route path="/experience" component={ExperienceTabs}/>
     <Route path="/about" component={AboutMe}/>
     <Route path="/portfolio" component={Portfolio}/>
     <Route path="/pet" component={Pet}/>
     



      
    </div>
  );
}

export default App;
