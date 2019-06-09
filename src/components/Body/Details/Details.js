import React from 'react';
import classes from './Details.module.css';
import Paper from '../../Material/Paper';
import QR from '../../../assets/images/alex-loian-qr-code-telephone.png';
import Button from '../../Material/Button';
import PDF from '../../../assets/images/CV-Alex-Loian-Front-End-Developer-React-Resume.pdf';



const Details = () => {
    return (
        <div className={classes.Container}>
            <Paper title = 'Details'/>
            <h2>Alex Loian</h2>
            <h3> Dnipro</h3>
            <div>
                <Button href="https://github.com/AlexLDP" value ='GitHub'/>
                <Button href={PDF} value ='CV'/>
                <Button href="https://www.linkedin.com/in/alex-loian-82828284" value ='LinkedIN'/>
                <Button href="mailto:alex@loian.dev" value ='Email'/>
                <Button href="tel:0980506389" value ='Phone'/>
            </div>
            <img src={QR} alt="Alex Loian Phone"/>
        </div>
    );
};

export default Details;