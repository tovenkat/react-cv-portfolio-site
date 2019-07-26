import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

import ReactGA from 'react-ga';



import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';

import MainPage from './components/MainPage/MainPage';
import Menu from './components/Menu/Menu';


// homepage  "homepage": "https://alexldp.github.io/react-cv-portfolio-site/",

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
   
    if(this.state.language==='ru'){
   
    }
    return (<BrowserRouter>
      <Menu language={this.state.language} changeLanguage={this.changeLanguageHandler}/>
      <Route path="/" exact render={()=>(<MainPage language={this.state.language} />)}/>
      {/* <Route path="/about" render={()=>(<AboutMe items={language.about}/>)}/> */}
      <Route path="/experience" render={()=>(<Experience/>)}/>
      <Route path="/portfolio" render={()=>(<Portfolio />)}/>
      
      
  </BrowserRouter>);
  }
}

export default App;
