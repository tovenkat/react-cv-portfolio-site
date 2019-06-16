import React from 'react';
import Card from '../Material/Card';
import Grid from '@material-ui/core/Grid';

import ReporterMarketPlace from '../../assets/images/alex-loian-commercial-wordpress-reporter-marketplace.png';
import Realestatesite from '../../assets/images/alex-loian-commercial-wordpress-realestatesite.png';
import PizzaShop from '../../assets/images/alex-loian-commercial-wordpress-pizza-shop.png';
import InvestSite from '../../assets/images/alex-loian-commercial-wordpress-investment-site.png';
import FinanceSite from '../../assets/images/alex-loian-commercial-wordpress-finance-site.png';

const DATAOBJ =[
    {
    title:'Realestate Wordpress Develpment',
    key:2,
    picture: Realestatesite,
    body:'LoremIpsum'
},{
    title:'Reporter Site',
    key:1,
    picture: ReporterMarketPlace,
    body:'LoremIpsum'
},
{
    title:'Pizza WordPress Site',
    key:3,
    picture: PizzaShop,
    body:'LoremIpsum'
},
{
    title:'Investment/Banking Site Development',
    key:4,
    picture: InvestSite,
    body:'LoremIpsum'
},
{
    title:'Financing Site Develpment',
    key:5,
    picture: FinanceSite,
    body:'LoremIpsum'
}];

const theme = {
    paddingTop:'40px',
    paddingBottom:'40px',
    backgroundColor:'whitesmoke'
};

const portfolioItems = DATAOBJ.map((item)=>{
    return (
        <Grid item xs={10} sm={10} md={10} lg={10} key={item.key}>
            <Card picture={item.picture} alt={item.title} title={item.title} body = {item.body}/>
        </Grid> 
    );
});
const Portfolio = () => {
    return (
         <Grid container spacing={2} style={theme} alignItems="stretch" justify='center'>
                {portfolioItems}
        </Grid> 
    );
};

export default Portfolio;