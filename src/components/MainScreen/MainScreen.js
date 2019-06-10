import React from 'react';
import {useSpring, animated} from 'react-spring';


const MainScreen = () => {
    const props = useSpring({to:{opacity: 1, marginTop:50}, from: {opacity: 0, marginTop:-500} });
    const leftP = useSpring({to:{opacity: 1, marginLeft:0}, from: {opacity: 0, marginLeft:-500}});
    return (
        <div className="App-header">
            <animated.div style={props}>
                <h1>Alex Loian</h1>
                </animated.div>
            
           
            <h1 className="App-logo">CV</h1>
            <animated.div style={leftP}>
            <h2>Front-End Developer</h2>
            </animated.div>
            
            <h5>Java Script, React, NodeJS, Bootstrap, CSS, HTML</h5>
        </div>
    );
};
export default MainScreen;

