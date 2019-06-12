import React from 'react';
import classes from './Portfolio.module.css';
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
        <Grid container spacing={3} style={{marginTop:'40px'}}alignContent='center' justify='center'>
                {DATAOBJ.map((item)=>{
                    return (
                        <Card picture={item.picture} alt={item.title} title={item.title} key={item.key} body = {item.body}/> 
                    );
                })}
        </Grid>
    );
};

export default Portfolio;