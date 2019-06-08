import React from 'react';
import classes from './NavigationItem.module.css';

const NavigationItem = () => {
    return (
        <a href = 'https://google.com.ua' className={classes.Link}>
            Links
        </a>
    );
};

export default NavigationItem;