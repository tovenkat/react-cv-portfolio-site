import React from 'react';
import classes from './Portfolio.module.css';
import Card from '../Material/Card';

import ReporterMarketPlace from '../../assets/images/alex-loian-commercial-wordpress-reporter-marketplace.png';
import Realestatesite from '../../assets/images/alex-loian-commercial-wordpress-realestatesite.png';
import PizzaShop from '../../assets/images/alex-loian-commercial-wordpress-pizza-shop.png';
import InvestSite from '../../assets/images/alex-loian-commercial-wordpress-investment-site.png';
import FinanceSite from '../../assets/images/alex-loian-commercial-wordpress-finance-site.png';

const DATAOBJ =[{
    title:'Reporter Site',
    key:1,
    picture: ReporterMarketPlace,
},
{
    title:'Realestate Wordpress Develpment',
    key:2,
    picture: Realestatesite,
},
{
    title:'Pizza WordPress Site',
    key:3,
    picture: PizzaShop,
},
{
    title:'Investment Banking Wordpress Developmen',
    key:4,
    picture: InvestSite,
},
{
    title:'Financing Site Develpment',
    key:5,
    picture: FinanceSite,
}];

const Portfolio = () => {
    return (
        <div className={classes.Container}>
                {DATAOBJ.map((item)=>{
                    return (
                        <Card picture={item.picture} alt={item.title} title={item.title} key={item.key}/> 
                    );
                })}
        </div>
    );
};

export default Portfolio;