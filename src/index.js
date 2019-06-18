import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DataEn from './DataEn';
//import DataRu from './DataRu';


ReactDOM.render(<App portfolio={DataEn.portfolio} pet={DataEn.pet} about={DataEn.about} exp={DataEn.exp}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
