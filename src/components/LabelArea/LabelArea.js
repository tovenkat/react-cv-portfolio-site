import React from 'react';
import classes from './LabelArea.module.css';

const LabelArea = (props) => {
    return (
        <div className={classes.Label}>
            <h2>{props.name}</h2>
        </div>
    );
};

export default LabelArea;