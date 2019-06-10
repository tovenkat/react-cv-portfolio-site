import React from 'react';
import './App.css';

import Tabs from './components/Tabs';
import  Expirience from './components/Expirience/Expirience';
import MainScreen from './components/MainScreen/MainScreen';
import SwitchedTabs from './components/SwitchedExpirience';

import Footer from './components/Footer/Footer';


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
