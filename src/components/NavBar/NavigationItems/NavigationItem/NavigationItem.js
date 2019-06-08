import React from 'react';
import classes from './NavigationItem.module.css';

const NavigationItem = (props) => {
    return (
        <a href = {props.link} className={classes.Link}>
            {props.name}
        </a>
    );
};

export default NavigationItem;