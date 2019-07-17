import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

import ReactGA from 'react-ga';

import DataEn from './DataEn';
import DataRu from './DataRu';

import Drawer from './components/Drawer';
import Paralax from './components/Parallax/Parallax';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Pet from './components/PetProject/PetProject';


ReactGA.initialize('UA-134625728-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  state={
    language:'en'
  }
  changeLanguageHandler =()=>{
    this.setState({language: this.state.language==='en'?'ru':'en'})
  }
  render(){
    let language=DataEn;
    if(this.state.language==='ru'){
      language=DataRu;
    }
    return (<BrowserRouter>
      <Route render={()=>(<Drawer changeLanguage={this.changeLanguageHandler}/>)}/>
      <Route path="/" exact render={()=>(<Paralax about={language.about}/>)}/>
      <Route path="/about" render={()=>(<AboutMe items={language.about}/>)}/>
      <Route path="/experience" render={()=>(<Experience data={language.exp}/>)}/>
      <Route path="/portfolio" render={()=>(<Portfolio items={language.portfolio}/>)}/>
      <Route path="/pet" render={()=>(<Pet items={language.pet}/>)}/>
      
  </BrowserRouter>);
  }
}

export default App;
