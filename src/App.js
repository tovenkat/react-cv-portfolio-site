import React from 'react';
import './App.css';
import ReactGA from 'react-ga';
import Tabs from './components/Tabs';
import MainScreen from './components/MainScreen/MainScreen';
import ExperienceTabs from './components/ExperienceTabs';
import Footer from './components/Footer/Footer';
import Parallax from './components/Parallax';

ReactGA.initialize('UA-134625728-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div className="App">
      <Parallax></Parallax>
      <MainScreen/>
      <ExperienceTabs/>
      <Tabs/>
      <Footer/>
      
    </div>
  );
}

export default App;
