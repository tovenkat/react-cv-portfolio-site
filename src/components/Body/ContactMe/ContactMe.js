import React from 'react';
import classes from './ContactMe.module.css';
import LabelArea from '../../LabelArea/LabelArea';
import QR from '../../../assets/images/alex-loian-qr-code-telephone.png';
import Form from '../../../Form';


const ContactMe = () => {
    return (
        <div className={classes.Container}>
            <LabelArea name = 'Contact Me'/>
            
            <img src={QR} alt="Alex Loian Phone"/>

        </div>
    );
};

export default ContactMe;