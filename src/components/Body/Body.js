import React from 'react';
import classes from './Body.module.css';
import TopSlider from './TopSlider/TopSlider';
import Portfolio from './Portfolio/Portfolio';

const Body = () => {
    return (
        <div>
            <TopSlider/>
            <Portfolio/>
        </div>
    );
};

export default Body;