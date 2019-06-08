import React from 'react';
import classes from './CV.module.css';

const CV = () => {
    return (
        <div>
            <div className = {classes.LastName}>
                <h1>Alex</h1>
                <h1>Loian</h1>
            </div>
            <div>
                <h2>Front-End Developer</h2>
                <h3>Java Script, React, NodeJS, Bootstrap, CSS, HTML</h3>
            </div>
            <div>
                
                    <h2>Details</h2>
                    <p>Ukraine, Dnipro +38 098 050 6389 alex@loian.dev</p>
                   
                    <h2>Skills</h2>
                        <p>English</p>
                        <p>JavaScript</p>
                        <p>React</p>
                        <p>CSS</p>
                        <p>HTML 5</p>
                        <p>NodeJS</p>
                

                
                
            </div>
            <div>
                <button>
                    GitHUB
                </button>
                <button>
                    CV
                </button>
                <button>
                    LinkedIn
                </button>
            </div>
        </div>

    );
};

export default CV;