import React from 'react';
import classes from './Details.module.css';
import QR from '../../assets/images/alex-loian-qr-code-telephone.png';
import Button from '../Material/Button';
import PDF from '../../assets/images/CV-Alex-Loian-Front-End-Developer-React-Resume.pdf';


import Form from './Form';



const Details = () => {
    return (

            <div className={classes.Details}>
                <div>
                    <h2>Alex Loian</h2>
                        <h4> Dnipro, Ukraine</h4>
                        <img width='120px' height='120px' src ={QR} alt ='Caspio Help Desk Specialist'/>
                    </div>
                    <div className={classes.Buttons}>
                    <Button href="https://github.com/AlexLDP" value ='GitHub'/>
                    <Button href={PDF} value ='CV'/>
                    <Button href="https://www.linkedin.com/in/alex-loian-82828284" value ='LinkedIN'/>
                    <Button href="mailto:alex@loian.dev" value ='Email'/>
                    <Button href="tel:0980506389" value ='Phone'/>
                    </div>
                    
                    <div>
                        <h2>Instant Message</h2>
                        <Form/>
                    </div>
             
        </div>
    );
};

export default Details;