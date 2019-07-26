import React from 'react';
import Card from '../Card';
import Grid from '@material-ui/core/Grid';


const theme = {
    backgroundColor:'#ffcc00',
    
};
const mainStyle={width:'100%',
boxSizing:'border-box', textAlign:'center'};

const Portfolio = (props) => {
    const portfolioItems = props.items.map((item)=>{
        return (
            <Grid item xs={10} sm={10} md={10} lg={10} key={item.key}>
                <Card picture={item.picture} alt={item.title} title={item.title} body = {item.body}/>
            </Grid> 
        );
    });
    return (<div style={mainStyle}>
                <div>
                <h1>Portfolio</h1>
                </div>
                <Grid container spacing={3} alignItems="stretch" style={theme} justify='center'>
                    {portfolioItems}
                </Grid> 
            </div>);
};

export default Portfolio;