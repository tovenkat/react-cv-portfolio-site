import React from 'react';
import classes from './PetItem.module.css';

const PetItem = (props) => {
    return (
        <div className={classes.PetItem}>
             <img src={props.picture} alt={props.alt} href={props.href}/>
        </div>
    );
};

export default PetItem;