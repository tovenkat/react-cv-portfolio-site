import React from 'react';
import Card from '../Card';
import Grid from '@material-ui/core/Grid';
import Data from './PortfolioData';


const theme = {
    backgroundColor:'#ffcc00',
    
};
const mainStyle={width:'100%',
boxSizing:'border-box', textAlign:'center'};

const Portfolio = (props) => {
    let portfolioItems = Data.en.portfolio.map((item)=>{
        return (
            <Grid item xs={10} sm={10} md={10} lg={10} key={item.key}>
                <Card picture={item.picture} alt={item.title} title={item.title} body = {item.body}/>
            </Grid> 
        );
    });
    let petItems = Data.en.pet.map((item)=>{
        return ( <Grid item xs={10} sm={10} md={10} lg={10} key={item.key}>
            <Card picture={item.picture} alt={item.alt} title={item.title} href={item.href}/>
            </Grid>);
    });
    if (Data.ru){
        portfolioItems = Data.ru.portfolio.map((item)=>{
            return (
                <Grid item xs={10} sm={10} md={10} lg={10} key={item.key}>
                    <Card picture={item.picture} alt={item.title} title={item.title} body = {item.body}/>
                </Grid> 
            );
        });
        petItems = Data.ru.pet.map((item)=>{
            return ( <Grid item xs={10} sm={10} md={10} lg={10} key={item.key}>
                <Card picture={item.picture} alt={item.alt} title={item.title} href={item.href}/>
                </Grid>);
        });
    }
    return (<div style={mainStyle}>
                <div>
                <h1>Portfolio</h1>
                </div>
                <Grid container spacing={3} alignItems="stretch" style={theme} justify='center'>
                    {portfolioItems}
                </Grid> 
                <h1>PET Projects</h1>
                    <Grid container spacing={3} alignItems="center" justify='center' >
                {petItems} 
                </Grid>
            </div>);
};



export default Portfolio;