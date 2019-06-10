import React from 'react';
import './App.css';

import Tabs from './components/Tabs';
import  Expirience from './components/Expirience/Expirience';
import MainScreen from './components/MainScreen/MainScreen';


function App() {
  return (
    <div className="App">
      <MainScreen/>
      <Expirience/>
      <Tabs/>
    </div>
  );
}

export default App;
