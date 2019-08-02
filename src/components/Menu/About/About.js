import React from 'react'
import Avatar from '../../../assets/images/alex-loian-fron-end-developer-avatar.jpg';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from '@material-ui/core/Grid';
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import cv from "../../../assets/images/CV-Alex-Loian-Front-End-Developer-React-Resume.pdf";

const About = (props) => {

   
  const buttonsBefore = (

    <Grid container  justify="space-around" spacing={3}>
   <Grid item xs={12} sm={4}>
     <Button fullWidth={true}
       
       color="primary"
       href="https://www.linkedin.com/in/alex-loian-82828284"
     >
       LinkedIn
     </Button>
   </Grid>
   <Grid item xs={12} sm={4}>
     <Button fullWidth={true}
       
       color="primary"
       href="https://github.com/AlexLDP"
     >
       GitHub
     </Button>
   </Grid>
   

 </Grid>

);
const buttonsAfter=( <Grid container  justify="space-around" spacing={3}>

<Grid item xs={12} sm={4}>
 <Button  fullWidth={true} color="primary" href="tel:0980506389">
   Call
 </Button>
</Grid>
<Grid item xs={12} sm={4}>
     <Button fullWidth={true}
       
       color="primary"
       download="Alex-Loian-CV-React-Developer"
       href={cv}
     >
       CV
     </Button>
 </Grid>
<Grid item xs={12} sm={4}>
 <Button fullWidth={true}
   
   color="primary"
   href="mailto:wisehelper@gmail.com"
 >
   Email
 </Button>
</Grid>

</Grid>
);

const dialog = (
 <Dialog
 open={props.open}
   TransitionComponent={props.Transition}
   keepMounted
   onClose={props.handleClose}
   aria-labelledby="alert-dialog-slide-title"
   aria-describedby="alert-dialog-slide-description"
 >
   <DialogTitle id="alert-dialog-slide-title">
     {"Looking for React Front-End position"}
   </DialogTitle>
   <DialogContent>
     {buttonsBefore}
   
    
     <Grid container spacing={3}>
       <Grid item xs={12} sm={4}>
        <img style={{margin:'auto'}}width='100px' src={Avatar} alt="Alex Loian"/>
       </Grid>
       <Grid item xs={12} sm={8}>
         <p>Location: Europe, Ukraine, Dnipro</p>
         <p>Phone: 098-050-63-89</p>
       </Grid>
     </Grid>
  
     
     {buttonsAfter}
     <br/>
    
   </DialogContent>
   <DialogActions>
     <Button onClick={props.aboutClose} color="primary">
       Close
     </Button>
   </DialogActions>
 </Dialog>
);
return dialog
}

export default About
