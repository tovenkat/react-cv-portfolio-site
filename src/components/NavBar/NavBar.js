import React from 'react';
import classes from './NavBar.module.css';
import Logo from './Logo/Logo';
import NavigationItems from './NavigationItems/NavigationItems';

const NavBar = () => {
    return (
        <div className={classes.Navbar}>
            <Logo/>
            <NavigationItems/>
        </div>
    );
};

export default NavBar;