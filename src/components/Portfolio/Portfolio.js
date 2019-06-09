import React from 'react';
import classes from './Portfolio.module.css';


import Card from '../Material/Card';

import ReporterMarketPlace from '../../assets/images/alex-loian-commercial-wordpress-reporter-marketplace.png';
import Realestatesite from '../../assets/images/alex-loian-commercial-wordpress-realestatesite.png';
import PizzaShop from '../../assets/images/alex-loian-commercial-wordpress-pizza-shop.png';
import InvestSite from '../../assets/images/alex-loian-commercial-wordpress-investment-site.png';
import FinanceSite from '../../assets/images/alex-loian-commercial-wordpress-finance-site.png';



const Portfolio = () => {

    return (
        <div className={classes.Container}>
                <Card picture={ReporterMarketPlace} alt='Reporter Site' title='Reporter Site'/> 
                <Card picture={Realestatesite} alt='Realestate Wordpress Develpment' title='Realestate Wordpress Develpment'/>
                <Card picture={PizzaShop} alt='Pizza WordPress Site' title='Pizza WordPress Site'/>     
                <Card picture={InvestSite} alt='Investment Banking Wordpress Development' title='Investment Banking Wordpress Development'/>        
                <Card picture={FinanceSite} alt='Financing Site Develpment' title ='Investment Banking Wordpress Development'/>
                

        </div>
    );
};

export default Portfolio;