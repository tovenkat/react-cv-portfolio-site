import React from 'react';
import Grid from '@material-ui/core/Grid';

import QR from '../../assets/images/alex-loian-qr-code-telephone.png';
import Button from '@material-ui/core/Button';
import PDF from '../../assets/images/CV-Alex-Loian-Front-End-Developer-React-Resume.pdf';

const Details = () => {
    return (
            <div style={{backgroundColor:'whitesmoke'}}>
                <Grid container style={{marginTop:'30px'}} alignContent='center' justify='center'>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <h2>Alex Loian</h2>
                        <h4> Dnipro, Ukraine</h4>
                        <h5> Phone: 098-050-63-89</h5>
                        <h5> Email: alex@loian.dev</h5>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <img width='120px' height='120px' style={{marginTop:'20px'}} src ={QR} alt ='Caspio Help Desk Specialist'/>
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{marginBottom:'30px', marginTop:'30px'}} alignContent='center' justify='space-around'>
                    <Grid item xs={6} md={2} lg={2}>
                    <Button color='primary' variant='outlined' fullWidth download href={PDF}>CV</Button>
                    </Grid>
                    <Grid item xs={6} md={2} lg={2}>
                    <Button color='primary' variant='outlined' fullWidth href="https://www.linkedin.com/in/alex-loian-82828284">LinkedIn</Button>
                    </Grid>
                    <Grid item xs={6} md={2} lg={2}>
                    <Button color='primary' variant='outlined' fullWidth href="mailto:alex@loian.dev?subject=Site%20Alex%20Inquiry">E-mail</Button>
                    </Grid>
                    <Grid item xs={6} md={2} lg={2}>
                    <Button color='primary' variant='outlined' fullWidth href="tel:0980506389">Phone</Button>
                    </Grid>
                    <Grid item xs={6} md={2} lg={2}>
                    <Button color='primary' variant='outlined' fullWidth href="https://github.com/AlexLDP">GitHub</Button>
                    </Grid>
                </Grid>  
 
        </div>
    );
};

export default Details;