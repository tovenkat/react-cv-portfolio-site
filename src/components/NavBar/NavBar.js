import React from 'react';
import classes from './NavBar.module.css';
import Logo from './Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';

const NavBar = () => {
    return (
        <div>
            <Logo/>
            <NavigationItems/>
        </div>
    );
};

export default NavBar;