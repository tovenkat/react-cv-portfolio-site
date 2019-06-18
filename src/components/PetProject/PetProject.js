import React from 'react';
import Card from '../Card';
import Grid from '@material-ui/core/Grid';



    
const theme = {
    backgroundColor:'whitesmoke',
    PaddingTop:'20px'
};



const PetProject = (props) => {
    const petItems = props.items.map((item)=>{
        return ( <Grid item xs={10} sm={10} md={10} lg={10} key={item.key}>
            <Card key={item.key} picture={item.picture} alt={item.alt} title={item.title}/>
            </Grid>);
    });
    return (
        <div >
            <h1  style={{marginBottom:'10px',}}>PET Projects</h1>
            <Grid container spacing={3} style={theme} alignItems="center" justify='center'>
                    {petItems} 
            </Grid>
        </div>);
};

export default PetProject;