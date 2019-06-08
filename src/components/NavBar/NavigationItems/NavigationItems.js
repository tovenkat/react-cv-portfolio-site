import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
    return (
        <div className={classes.Links}>
            <NavigationItem name='CV' link ='#CV'/>
            <NavigationItem name='Portfolio' link = '#protfolio'/>
            <NavigationItem name='Experience' link ='#experience'/>
            <NavigationItem name='PET' link = '#PET'/>
            <NavigationItem name='Contact Me' link ='#contact'/>
            <NavigationItem name='Other' link = '#'/>    
        </div>
    );
};

export default NavigationItems;