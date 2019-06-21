import React from 'react'
import Skills from '../Skills/Skills';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const AboutMe = (props)=> {
       
        // const buttons = props.items.buttons.map((button,index)=>(<Grid item xs={6} md={2} lg={2} key={index}>
        //     <Button color='primary' variant='outlined' fullWidth download={button.download} href={button.href}>{button.title}</Button>
        // </Grid>));

        const qrItem =  <img width='120px' height='120px' style={{paddingTop:'20px'}} src ={props.items.qr} alt ='Caspio Help Desk Specialist'/>;
             
        return (
            <div>
                <h1>{props.items.title}</h1>
                <Grid container style={{paddingTop:'30px',paddingBottom:'30px'}} alignContent='center' justify='center'>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <img src={props.items.avatar} width='150px' alt="Alex Loian Front-End Developer"/>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <h4>Name: </h4><p>{props.items.name}</p>
                        <h4>Age: </h4><p>{props.items.age}</p>
                        <h4>Location: </h4><p>{props.items.location}</p>
                    </Grid>
                </Grid>
                {props.items.about}
                <div>
                    <Button color='primary' variant='outlined'  download={props.items.cv.download} href={props.items.cv.href}>{props.items.cv.title}</Button>
                </div>
                


               
                <Skills items={props.items.skills}/>
                <Grid container style={{paddingTop:'30px'}} alignContent='center' justify='center'>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                       {qrItem}
                    </Grid>
                </Grid>
            </div>
        );
    
}

export default AboutMe;