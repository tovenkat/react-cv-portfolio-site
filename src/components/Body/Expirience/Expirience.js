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
                <ExpItem picture ={Upwork} alt='Upwork Freelancer Wordpress Developer'/>
                <ExpItem picture ={Caspio} alt ='Caspio Help Desk Specialist'/>
                <ExpItem picture ={IMT} alt = 'Front-End Java Script Developer React Node JS'/>
                <ExpItem picture ={AmericanEnglishCenter} alt = 'American English Center Bussiness English'/>
            </div>

        </div>
    );
};

export default Expirience;