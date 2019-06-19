import React from 'react';
import Grid from '@material-ui/core/Grid';


const theme = {
    paddingTop:'40px',
    paddingBottom:'40px',
    backgroundColor:'whitesmoke'
};


const Skills = (props) => {
    const skillItems = props.items.map((item)=>{
        return (<Grid item xs={6} sm={4} md={1} lg={1} key={item.key}><img src = {item.picture} width='60px' alt={item.alt}/></Grid>);
    });
    return (<Grid container spacing={0} style={theme} alignItems="stretch" justify='center'>
                {skillItems}
            </Grid>
    );
};

export default Skills;