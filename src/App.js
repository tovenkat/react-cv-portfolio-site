import React from 'react';
import './App.css';
import ReactGA from 'react-ga';

import Tabs from './components/Tabs';

import MainScreen from './components/MainScreen/MainScreen';
import SwitchedTabs from './components/SwitchedExpirience';

import Footer from './components/Footer/Footer';

ReactGA.initialize('UA-134625728-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <div className="App">
      <MainScreen/>
      <SwitchedTabs/>
      <Tabs/>
      <Footer/>
     

    </div>
  );
}

export default App;
