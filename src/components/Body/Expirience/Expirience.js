import React from 'react';
import classes from './Expirience.module.css';
import LabelArea from '../../LabelArea/LabelArea';
import ExpItem from './ExpItem/ExpItem';

import Caspio from '../../../assets/images/alex-loian-work-timeline-caspio.png';
import AmericanEnglishCenter from '../../../assets/images/alex-loian-work-timeline-english-level.png';
import IMT from '../../../assets/images/alex-loian-work-timeline-imt-school.png';
import Upwork from '../../../assets/images/alex-loian-work-timeline-upwork.png';



const Expirience = () => {
    return (
        <div className={classes.Container}>
            <LabelArea name = 'Expirience'/>
            <div className={classes.Items}>
                <ExpItem picture ={Upwork}/>
                <ExpItem picture ={Caspio}/>
                <ExpItem picture ={IMT}/>
                <ExpItem picture ={AmericanEnglishCenter}/>
            </div>

        </div>
    );
};

export default Expirience;