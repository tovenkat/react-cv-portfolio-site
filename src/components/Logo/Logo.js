import React from 'react';
import classes from './Logo.module.css';
import alexLogo from '../../../assets/images/alex-loian-logo.png';


const Logo = () => {
    return (
        <div className = {classes.Logo}>
        <img src={alexLogo} alt="Alex Loian Logo" href='./'/>
        </div>
    );
};

export default Logo;