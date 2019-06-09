import React from 'react';

import classes from './Body.module.css';

import TopSlider from './TopSlider/TopSlider';
import Portfolio from './Portfolio/Portfolio';
import CV from './CV/CV';
import Expirience from './Expirience/Expirience';
import PetProject from './PetProject/PetProject';
import ContactMe from './ContactMe/ContactMe';

const Body = () => {
    return (
        <div className = {classes.Body}>
            <TopSlider/>
            <Expirience/>
            <Portfolio/>
            <CV/>
            <PetProject/>
            <ContactMe/>
        </div>
    );
};

export default Body;