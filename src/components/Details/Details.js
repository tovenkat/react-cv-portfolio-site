import React from 'react';
import classes from './Details.module.css';
import QR from '../../assets/images/alex-loian-qr-code-telephone.png';
import Button from '../Material/Button';
import PDF from '../../assets/images/CV-Alex-Loian-Front-End-Developer-React-Resume.pdf';
import Box from '@material-ui/core/Box';

const Details = () => {
    return (

            <div className={classes.Details}>
                    <Box color="text.primary" m={1}>
                    <h2>Alex Loian</h2>
                        <h4> Dnipro, Ukraine</h4>
                    </Box>
                    <Box className={classes.Buttons}>
                        <Button download href={PDF} value ='CV'/>
                        <Button href="https://www.linkedin.com/in/alex-loian-82828284" value ='LinkedIN'/>
                        <Button href="mailto:alex@loian.dev?subject=Site%20Alex%20Inquiry" value ='Email'/>
                        <Button href="tel:0980506389" value ='Phone'/>
                        <Button href="https://github.com/AlexLDP" value ='GitHub'/>
                    </Box>
                    <div>
                    <img width='120px' height='120px' src ={QR} alt ='Caspio Help Desk Specialist'/>
                    </div>
                    
                    
        </div>
    );
};

export default Details;