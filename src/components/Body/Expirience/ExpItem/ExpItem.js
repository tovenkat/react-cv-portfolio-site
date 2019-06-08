import React from 'react';
import classes from './ExpItem.module.css';

const ExpItem = (props) => {
    return (
        <div className={classes.ExpItem}>
             <img src={props.picture} alt={props.alt} href={props.href}/>
        </div>
    );
};

export default ExpItem;