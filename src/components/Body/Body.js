import React from 'react';

import classes from './Body.module.css';

import TopSlider from './TopSlider/TopSlider';
import Portfolio from './Portfolio/Portfolio';

import Skills from './Skills/Skills';
import Expirience from './Expirience/Expirience';
import PetProject from './PetProject/PetProject';
import Details from './Details/Details';

import Paper from '../Material/Paper';

const Body = () => {
    return (
        <div className = {classes.Body}>
            <TopSlider/>
            <Details/>
            <Expirience/>
            <Portfolio/>
            <Skills/>
            <PetProject/>
            
        </div>
    );
};

export default Body;