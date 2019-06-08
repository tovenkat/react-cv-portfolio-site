import React from 'react';
import classes from './Portfolio.module.css';
import LabelArea from '../../LabelArea/LabelArea';
import PortfolioItem from './PortfolioItem/PortfolioItem';

import ReporterMarketPlace from '../../../assets/images/alex-loian-commercial-wordpress-reporter-marketplace.png';
import Realestatesite from '../../../assets/images/alex-loian-commercial-wordpress-realestatesite.png';
import PizzaShop from '../../../assets/images/alex-loian-commercial-wordpress-pizza-shop.png';
import InvestSite from '../../../assets/images/alex-loian-commercial-wordpress-investment-site.png';
import FinanceSite from '../../../assets/images/alex-loian-commercial-wordpress-finance-site.png';


const Portfolio = () => {
    return (
        <div className={classes.Container}>
            <LabelArea name = 'Portfolio'/>
            <div className={classes.Items}>
                <PortfolioItem picture={ReporterMarketPlace} alt='Reporter Site'/> 
                <PortfolioItem picture={Realestatesite} alt='Realestate Wordpress Develpment'/>
                <PortfolioItem picture={PizzaShop} alt='Pizza WordPress Site'/>     
                <PortfolioItem picture={InvestSite} alt='Investment Banking Wordpress Development'/>
                <p>Comming Soon...</p>        
                <PortfolioItem picture={FinanceSite} alt='Financing Site Develpment'/>
                       
            </div>
            
        </div>
    );
};

export default Portfolio;