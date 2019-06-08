import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Body from '../../components/Body/Body';
import Footer from '../../components/Footer/Footer';

const SiteWrapper = () => {
    return (
        <div>
            <NavBar/>
            <Body/>
            <Footer/>
            Sitewrapper displaying
        </div>
    );
};

export default SiteWrapper;