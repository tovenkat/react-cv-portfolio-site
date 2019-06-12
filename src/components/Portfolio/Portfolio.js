import React from 'react';

import Card from '../Material/Card';

import ReporterMarketPlace from '../../assets/images/alex-loian-commercial-wordpress-reporter-marketplace.png';
import Realestatesite from '../../assets/images/alex-loian-commercial-wordpress-realestatesite.png';
import PizzaShop from '../../assets/images/alex-loian-commercial-wordpress-pizza-shop.png';
import InvestSite from '../../assets/images/alex-loian-commercial-wordpress-investment-site.png';
import FinanceSite from '../../assets/images/alex-loian-commercial-wordpress-finance-site.png';
import Grid from '@material-ui/core/Grid';

const DATAOBJ =[{
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
    title:'Investment Banking Wordpress Developmen',
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

const Portfolio = () => {
    return (
         <Grid container spacing={2} style={{marginTop:'40px',backgroundColor:'whitesmoke'}} alignItems="stretch" justify='center'>
                {DATAOBJ.map((item)=>{
                    return (
                        <Grid item xs={12} sm={6} md={6} lg={4} key={item.key}>
                            <Card picture={item.picture} alt={item.title} title={item.title} body = {item.body}/>
                        </Grid> 
                    );
                })}
        </Grid>
       
    );
};

export default Portfolio;