import React from 'react';
import Card from '../Card';
import Grid from '@material-ui/core/Grid';
    
const theme = {
    backgroundColor:'#ffcc00',
    top:'0px',
    width:'100%'
};

const PetProject = (props) => {
    const petItems = props.items.map((item)=>{
        return ( <Grid item xs={10} sm={10} md={10} lg={10} key={item.key}>
            <Card picture={item.picture} alt={item.alt} title={item.title} href={item.href}/>
            </Grid>);
    });
    return (
        <div >
            <h1  style={{marginBottom:'10px',}}>PET Projects</h1>
            <Grid container spacing={3} style={theme} alignItems="center" justify='center' >
                    {petItems} 
            </Grid>
        </div>);
};

export default PetProject;