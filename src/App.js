import React from 'react';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

import ReactGA from 'react-ga';

import Drawer from './components/Drawer';
import ParalaxL from './components/Parallax/Parallax';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Pet from './components/PetProject/PetProject';


ReactGA.initialize('UA-134625728-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App(props) {
  return (<BrowserRouter>
        <Route component={Drawer}/>
        <Route path="/" exact render={()=>(<ParalaxL/>)}/>
        <Route path="/about" render={()=>(<AboutMe items={props.about}/>)}/>
        <Route path="/experience" render={()=>(<Experience data={props.exp}/>)}/>
        <Route path="/portfolio" render={()=>(<Portfolio items={props.portfolio}/>)}/>
        <Route path="/pet" render={()=>(<Pet items={props.pet}/>)}/>
        
    </BrowserRouter>);
}

export default App;
