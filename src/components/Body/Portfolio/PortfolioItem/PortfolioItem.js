import React from 'react';
import classes from './PortfolioItem.module.css'

const PortfolioItem = (props) => {
    return (
        <div className = {classes.Item}>
            <img src={props.picture} alt={props.alt} href={props.href}/>
        </div>
    );
};

export default PortfolioItem;