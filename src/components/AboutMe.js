import React from 'react'
import Skills from './Skills/Skills';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const AboutMe = (props)=> {
       
        const buttons = props.items.buttons.map((button,index)=>(<Grid item xs={6} md={2} lg={2} key={index}>
            <Button color='primary' variant='outlined' fullWidth download={button.download} href={button.href}>{button.title}</Button>
        </Grid>));
        const mainText = props.items.text.map((text,index)=>(<h1 key={index}>{text}</h1>));
        const contact = props.items.contact.map((text,index)=>(<h4 key={index}>{text}</h4>));
        const qrItem =  <img width='120px' height='120px' style={{paddingTop:'20px'}} src ={props.items.qr} alt ='Caspio Help Desk Specialist'/>;
             
        return (
            <div>
                {mainText}
                <Grid container spacing={2} style={{paddingBottom:'30px', paddingTop:'30px'}} alignContent='center' justify='space-around'>
                    {buttons}
                </Grid>  
                <Skills items={props.items.skills}/>
                <Grid container style={{paddingTop:'30px'}} alignContent='center' justify='center'>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        {contact}
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                       {qrItem}
                    </Grid>
                </Grid>
            </div>
        );
    
}

export default AboutMe;